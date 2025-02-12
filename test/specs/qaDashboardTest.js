const LoginPage1 = require('../pageobjects/vynpomlogin1'); // Path is relative to the spec file
const QADashboardPage = require('../pageobjects/qaDashboardpage');

describe('Login Page', () => {
    it('should login with valid credentials', async () => {
        browser.url('https://vynqa.vynsmart.com')
        LoginPage1.login('vaibhav+qa@humanlearning.com','9634Pb@@')
        await browser.pause(10000);
    });
  });

  
  describe('QA Dashboard Functionality', () => {

    it('should click author links', async () => {
      await browser.url('https://vynqa.vynsmart.com'); 
      await QADashboardPage.clickAuthorLink(0); 
      await browser.pause(10000);
    });
  });

describe('QA Dashboard Functionality', () => {

  it('should click author links', async () => {
    await browser.url('https://vynqa.vynsmart.com'); 
    await qaDashboardLinka.click(); 
    await browser.pause(10000);
    // Click the first author link
    // Add assertions to verify navigation or content
    await browser.back(); // Go back to the dashboard
  });
});

  it('should open recording tab', async () => {
    await browser.url('https://vynqa.vynsmart.com');
    const isTabOpen = await QADashboardPage.openRecordingTab();
    expect(isTabOpen).toBe(true);
  });
  it('should interact with related dashboards, PDF, and checkbox', async () => {
    await browser.url('https://vynqa.vynsmart.com');
    await QADashboardPage.clickViewRelatedDashboards();
    // Add assertions for navigation
    await browser.url('https://vynqa.vynsmart.com'); // Go back to dashboard
    await QADashboardPage.downloadPDF();
    // Add assertions for download (may require file system checks)
    await browser.url('https://vynqa.vynsmart.com');
    await QADashboardPage.selectVynsForPDF();
    // Add assertions if needed
  });
  it('should validate data on screen', async () => {
    await browser.url('https://vynqa.vynsmart.com');
    const data = await QADashboardPage.getAllData();
    // Add your assertions to validate the 'data' (e.g., check specific values)
    console.log(data); // Log the data to inspect it (remove in final test)
    expect(data.length).toBeGreaterThan(0); // Example: Ensure data is present
  });
  it('should download summary', async () => {
    await browser.url('https://vynqa.vynsmart.com/dashboards');
    await QADashboardPage.downloadSummary();
    // Add assertions for download (may require file system checks)
  });
  it('should open search menu', async () => {
    await browser.url('https://vynqa.vynsmart.com/dashboards');
    const isMenuOpen = await QADashboardPage.openSearchMenu();
    expect(isMenuOpen).toBe(true);
  });
