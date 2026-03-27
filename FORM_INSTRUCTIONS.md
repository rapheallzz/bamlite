# Setup Instructions: BAM Connect Form & Google Sheets Integration

To enable the "Connect" form on your website to automatically update your Google Spreadsheet and send email notifications, follow these steps:

### 1. Deploy the Google Apps Script
1.  Open a new or existing [Google Spreadsheet](https://docs.google.com/spreadsheets).
2.  In the top menu, go to **Extensions** > **Apps Script**.
3.  Delete any code in the editor and paste the contents of `google-apps-script.gs` from this project.
4.  Click the **Save** (disk icon) and name the project "BAM Lead Handler".
5.  Click the blue **Deploy** button > **New Deployment**.
6.  Select **Web App** as the "Select type" (cog icon).
7.  **Configuration**:
    *   **Description**: BAM Connect Leads
    *   **Execute as**: Me
    *   **Who has access**: Anyone (This is required for the form to submit without requiring users to log into Google).
8.  Click **Deploy**.
9.  Google will ask you to "Authorize access". Click **Authorize access**, select your Google account, and click **Allow**.
10. Once deployed, you will see a **Web App URL**. **Copy this URL**.

### 2. Connect the "Connect" Page
1.  Open `connect.html`.
2.  Scroll down to the `<script>` section (around line 228).
3.  Find the line: `const scriptUrl = 'YOUR_GOOGLE_SCRIPT_WEB_APP_URL_HERE';`
4.  Replace `'YOUR_GOOGLE_SCRIPT_WEB_APP_URL_HERE'` with the **Web App URL** you copied in the previous step.
5.  Save the file.

### 3. Test the Integration
1.  Open `connect.html` in your browser.
2.  Fill out the form and click **Request Access**.
3.  Check your Google Spreadsheet for the new row.
4.  Check `sales@blackaudiencemarketplace.com` for the notification email.

*Note: The script is designed with fuzzy matching, so if you decide to change header names in your spreadsheet later, it will still attempt to find the correct column for each piece of data.*
