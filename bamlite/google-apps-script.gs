/**
 * Google Apps Script for Global Black Diaspora Report & Briefing Requests
 *
 * Features:
 * - Dynamic Column Mapping: Automatically finds the correct column based on header names (fuzzy matching).
 * - Multi-form Support: Handles both "Download Report" and "Executive Briefing" submissions.
 * - Auto-Initialization: Creates headers if the sheet is empty.
 * - Email Notifications: Sends formatted alerts to sales@blackaudiencemarketplace.com.
 */

function doPost(e) {
  const LOCK = LockService.getScriptLock();
  try {
    // Prevent concurrent write issues
    LOCK.waitLock(30000);

    const data = JSON.parse(e.postData.contents);
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // Define our standard fields and their fuzzy matching patterns
    const fieldMapping = {
      'timestamp': [/timestamp/i, /time/i],
      'type': [/type/i, /form/i, /request/i],
      'firstName': [/first.*name/i, /fname/i],
      'lastName': [/last.*name/i, /lname/i],
      'email': [/email/i, /e-mail/i],
      'company': [/company/i, /org/i, /organization/i],
      'role': [/role/i, /title/i, /job/i, /position/i],
      'industry': [/industry/i, /sector/i, /org.*type/i],
      'interest': [/interest/i, /area/i, /topic/i, /inquiry.*type/i],
      'message': [/message/i, /note/i, /comment/i, /briefly/i]
    };

    // Initialize mapped data with defaults
    const mappedData = {};
    for (const key in fieldMapping) {
      mappedData[key] = "";
    }
    mappedData['timestamp'] = data.timestamp || new Date().toISOString();
    mappedData['type'] = data.type || "unknown";

    // Improved mapping: Match incoming JSON keys against our patterns
    for (const incomingKey in data) {
      for (const internalKey in fieldMapping) {
        // Skip timestamp/type as we handled them specifically or want to prioritize incoming
        if (internalKey === 'timestamp' || internalKey === 'type') {
           if (data[incomingKey]) mappedData[internalKey] = data[incomingKey];
           continue;
        }
        const patterns = fieldMapping[internalKey];
        if (patterns.some(p => p.test(incomingKey))) {
          mappedData[internalKey] = data[incomingKey];
          break;
        }
      }
    }

    // 1. Spreadsheet Logging
    const headers = findOrCreateHeaders(sheet, Object.keys(fieldMapping));
    const newRow = headers.map(header => {
      for (const key in fieldMapping) {
        const patterns = fieldMapping[key];
        if (patterns.some(p => p.test(header))) {
          return mappedData[key] || "";
        }
      }
      return ""; // Column not in our mapping
    });

    sheet.appendRow(newRow);

    // 2. Email Notification
    sendEmailNotification(mappedData);

    return ContentService.createTextOutput(JSON.stringify({ "result": "success" }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    console.error('Submission Error:', error);
    return ContentService.createTextOutput(JSON.stringify({ "result": "error", "error": error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    LOCK.releaseLock();
  }
}

/**
 * Ensures the spreadsheet has the correct headers and returns the current header list.
 */
function findOrCreateHeaders(sheet, expectedKeys) {
  let headers = [];
  if (sheet.getLastRow() > 0) {
    headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
  }

  if (headers.length === 0) {
    // Mapping for user-friendly header names
    const headerNames = {
      'timestamp': 'Timestamp',
      'type': 'Form Type',
      'firstName': 'First Name',
      'lastName': 'Last Name',
      'email': 'Email',
      'company': 'Company',
      'role': 'Role / Title',
      'industry': 'Industry / Org Type',
      'interest': 'Interest / Inquiry',
      'message': 'Message'
    };
    headers = expectedKeys.map(key => headerNames[key] || key);
    sheet.appendRow(headers);
  }
  return headers;
}

/**
 * Sends a formatted email notification based on the form type.
 */
function sendEmailNotification(data) {
  const recipient = "sales@blackaudiencemarketplace.com";
  const isBriefing = data.type === "briefing";

  const subject = isBriefing
    ? "Executive Briefing Request: " + data.firstName + " " + data.lastName
    : "New Report Download: " + data.firstName + " " + data.lastName;

  const intro = isBriefing
    ? "A new executive briefing has been requested regarding the Global Black Diaspora Report."
    : "A new user has downloaded the Global Black Diaspora Report.";

  const body = intro + "\n\n" +
               "Details:\n" +
               "----------------------------------\n" +
               "Name: " + data.firstName + " " + data.lastName + "\n" +
               "Email: " + data.email + "\n" +
               "Company: " + (data.company || "N/A") + "\n" +
               "Role: " + (data.role || "N/A") + "\n" +
               "Industry/Org Type: " + (data.industry || "N/A") + "\n" +
               "Interest/Inquiry: " + (data.interest || "N/A") + "\n" +
               "Message: " + (data.message || "N/A") + "\n" +
               "Timestamp: " + data.timestamp + "\n" +
               "----------------------------------\n\n" +
               "View full data here: " + SpreadsheetApp.getActiveSpreadsheet().getUrl();

  MailApp.sendEmail(recipient, subject, body);
}
