const LoginPage1 = require('../pageobjects/vynpomlogin1'); // Path is relative to the spec file
const QADashboardPage = require('../pageobjects/qaDashboardpage');



 /* before(async () => {
    console.log('2️⃣ Before All - Runs ONCE before ALL tests');
  });*/
  
  before (async () => {
    console.log('<<<<<<<<<<< login called');
    browser.url('https://vynqa.vynsmart.com')
     await LoginPage1.login('vaibhav+qa@humanlearning.com','9634Pb@@');
    //  await expect(browser).toHaveUrlContaining('/dashboards');
     await browser.pause(10000);
    //  await QADashboardPage.open();
     
  });
  describe('Dash Page', () => {
    console.log('<<<<<<<<<< qaDashboardpage called')
  });

  /*it('should login with valid credentials', async () => {
    browser.url('https://vynqa.vynsmart.com')
    LoginPage1.login('vaibhav+qa@humanlearning.com','9634Pb@@')
    await browser.pause(10000);
});*/




it('should click Dashboard', async () => {
  console.log('<<<<<<<<<<< Dahboard called');
  await browser.url('https://vynqa.vynsmart.com'); 
  await QADashboardPage.navigateToQADashboard(); 
  await browser.pause(10000);
});
it('should click author links', async () => {
  await browser.url('https://vynqa.vynsmart.com/dashboards/d2924b28251c42bbaf6c2ae75e09f24c'); 
  await QADashboardPage.clickAuthorLink(); 
  
  await browser.pause(10000);
  
  // await browser.back();
  // await browser.url('https://vynqa.vynsmart.com/dashboards/d2924b28251c42bbaf6c2ae75e09f24c');  
});
it('should click vyn play Tab', async () => {
  await browser.url('https://vynqa.vynsmart.com/dashboards/d2924b28251c42bbaf6c2ae75e09f24c/7cf11cc0382544f6b3dff930f105975d'); 
  await QADashboardPage.openRecordingTab(); 
  
  await browser.pause(10000);
});

it('should interact with related dashboards, PDF, and checkbox', async () => {
  await browser.url('https://vynqa.vynsmart.com/dashboards/d2924b28251c42bbaf6c2ae75e09f24c');
  await QADashboardPage.clickViewRelatedDashboards();
});
/*it('should open recording tab', async () => {
  await browser.url('https://vynqa.vynsmart.com/dashboards/d2924b28251c42bbaf6c2ae75e09f24c');
  await QADashboardPage.openRecordingTab();
  const isTabOpen = await QADashboardPage.openRecordingTab();
  expect(isTabOpen).toBe(true);
  });



/*describe('QA Dashboard Functionality', () => {

it('should click author links', async () => {
  await browser.url('https://vynqa2.vynsmart.com'); 
  await QADashboardPage.clickAuthorLink(0); 
  await browser.pause(10000);
});
});

describe('QA Dashboard Functionality', () => {

it('should click author links', async () => {
  await browser.url('https://vynqa2.vynsmart.com'); 
  await QADashboardPageLink.click(); 
  await browser.pause(10000);

});
});

describe('QA Dashboard Functionality', () => {

it('should click author links', async () => {
await browser.url('https://vynqa2.vynsmart.com'); 
await QADashboardPageLink.click(); 
await browser.pause(10000);
// Click the first author link
// Add assertions to verify navigation or content
await browser.back(); // Go back to the dashboard
});
});

it('should open recording tab', async () => {
await browser.url('https://vynqa2.vynsmart.com');
const isTabOpen = await QADashboardPage.openRecordingTab();
expect(isTabOpen).toBe(true);
});


// Add assertions for navigation

await browser.url('https://vynqa2.vynsmart.com'); // Go back to dashboard
await QADashboardPage.downloadPDF();
// Add assertions for download (may require file system checks)

await browser.url('https://vynqa2.vynsmart.com');
await QADashboardPage.selectVynsForPDF();
// Add assertions if needed
});
it('should validate data on screen', async () => {
await browser.url('https://vynqa2.vynsmart.com');
const data = await QADashboardPage.getAllData();
// Add your assertions to validate the 'data' (e.g., check specific values)
console.log(data); // Log the data to inspect it (remove in final test)
expect(data.length).toBeGreaterThan(0); // Example: Ensure data is present
});
it('should download summary', async () => {
await browser.url('https://vynqa2.vynsmart.com/dashboards');
await QADashboardPage.downloadSummary();
// Add assertions for download (may require file system checks)
});
it('should open search menu', async () => {
await browser.url('https://vynqa2.vynsmart.com/dashboards');
const isMenuOpen = await QADashboardPage.openSearchMenu();
expect(isMenuOpen).toBe(true);
});*/
   
