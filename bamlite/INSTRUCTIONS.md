# Setup Instructions: Google Sheets & Email Integration

To enable the lead capture form to automatically update your Google Spreadsheet and send email notifications, follow these steps:

### 1. Deploy the Google Apps Script
1.  Open your [Google Spreadsheet](https://docs.google.com/spreadsheets/d/1x3L5e7GAMfYcCRRoILDKmZlwxjAf0oV2nL_mXhdcRnU/edit).
2.  In the top menu, go to **Extensions** > **Apps Script**.
3.  Delete any code in the editor and paste the contents of `global-black-diaspora-report/google-apps-script.gs`.
4.  Click the **Save** (disk icon) and name the project "Report Lead Handler".
5.  Click the blue **Deploy** button > **New Deployment**.
6.  Select **Web App** as the "Select type" (cog icon).
7.  **Configuration**:
    *   **Description**: Diaspora Report Leads
    *   **Execute as**: Me
    *   **Who has access**: Anyone (This is required for the form to submit without requiring users to log into Google).
8.  Click **Deploy**.
9.  Google will ask you to "Authorize access". Click **Authorize access**, select your Google account, and click **Allow**.
10. Once deployed, you will see a **Web App URL**. **Copy this URL**.

### 2. Connect the Landing Page
1.  Open `global-black-diaspora-report/index.html`.
2.  Scroll down to the `<script>` section (around line 262).
3.  Find the line: `const SCRIPT_URL = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE';`
4.  Replace `'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE'` with the **Web App URL** you copied in the previous step.
5.  Save the file.

### 3. Test the Integration
1.  Open the landing page in your browser.
2.  Fill out the download form and click **Access Report**.
3.  Check your Google Spreadsheet for the new row.
4.  Check `bamreport@blackaudiencemarketplace.com` for the notification email.

*Note: The script also maintains a backup of all submissions in the browser's LocalStorage. You can still export this data at any time by typing `window.exportSubmissions()` in the browser's developer console.*
