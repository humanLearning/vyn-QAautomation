// Path is relative to the spec file


const LoginPage1 = require('../pageobjects/vynpomlogin1');
const QADashboardPage1 = require('../pageobjects/qaDashboardpage2');

before (async () => {
    console.log('<<<<<<<<<<< login called');
    browser.url('https://vynqa.vynsmart.com')
     await LoginPage1.login('vaibhav+qa@humanlearning.com','9634Pb@@');
    //  await expect(browser).toHaveUrlContaining('/dashboards');
     await browser.pause(10000);
    //  await QADashboardPage.open();
     
  });

     
  
  /*describe('Dash Page', () => {
    console.log('<<<<<<<<<< qaDashboardpage called')
  });*/

  /*it('should login with valid credentials', async () => {
    browser.url('https://vynqa.vynsmart.com')
    LoginPage1.login('vaibhav+qa@humanlearning.com','9634Pb@@')
    await browser.pause(10000);
});*/




it('should click Dashboard', async () => {
  console.log('<<<<<<<<<<< Dahboard called');
  await browser.url('https://vynqa.vynsmart.com'); 
  await QADashboardPage1.navigateToQADashboard(); 
  await browser.pause(10000);
});
it('should click author links', async () => {
  await browser.url('https://vynqa.vynsmart.com/dashboards/d2924b28251c42bbaf6c2ae75e09f24c'); 
  await QADashboardPage1.clickAuthorLink(); 
  
  await browser.pause(10000);
  
  // await browser.back();
  // await browser.url('https://vynqa.vynsmart.com/dashboards/d2924b28251c42bbaf6c2ae75e09f24c');  
});

/*it('should interact with related dashboards, PDF, and checkbox', async () => {
  await browser.url('https://vynqa.vynsmart.com/dashboards/d2924b28251c42bbaf6c2ae75e09f24c');
  // await QADashboardPage.clickthreedots();
  await QADashboardPage.openDropdown();
  const optionsText = await QADashboardPage.getOptionTexts();
  console.log('Dropdown Options:', optionsText);
  await QADashboardPage.clickAllOptions();

  await browser.pause(10000);
});*/

// it('should interact with related dashboards, PDF, and checkbox', async () => {
  // await browser.url('https://vynqa.vynsmart.com/dashboards/d2924b28251c42bbaf6c2ae75e09f24c');
  // await QADashboardPage.getoptiontexts();
  // await browser.pause(10000);
// });
it('should interact on three dots', async () => {
  console.log("element is display");
  await browser.url('https://vynqa.vynsmart.com/dashboards/d2924b28251c42bbaf6c2ae75e09f24c');
  await QADashboardPage1.openDropdown();
  await browser.pause(10000);
  console.log("element is display");
  await QADashboardPage1.clickViewRelatedDashboards();
  await browser.pause(10000);
  await browser.url('https://vynqa.vynsmart.com/dashboards/d2924b28251c42bbaf6c2ae75e09f24c');
  await QADashboardPage1.openDropdown();
  await QADashboardPage1.downloadPDF();
  await browser.pause(10000);
  await browser.url('https://vynqa.vynsmart.com/dashboards/d2924b28251c42bbaf6c2ae75e09f24c');
  await QADashboardPage1.openDropdown();
  await QADashboardPage1.selectVynsForPDF();
  await browser.pause(5000);
 

});
it('should click on Vyns', async () => {
  await QADashboardPage1.selectVynsclick1();
  await browser.pause(5000);
  await QADashboardPage1.selectVynsclick2();
  await browser.pause(5000);
  await QADashboardPage1.downloadVynButton1();
  await browser.pause(5000);
});

it('should click on Download Summary', async () => {
  await QADashboardPage1.downloadSummary();
  await browser.pause(5000);
});

  it('should click on open Search button', async () => {
  await QADashboardPage1.openSearchMenu();
  await browser.pause(5000);
  await QADashboardPage1.searchoptionfilter();
  await browser.pause(5000);
});

/*it('should interact with related dashboards', async () => {
  await browser.url('https://vynqa.vynsmart.com/dashboards/d2924b28251c42bbaf6c2ae75e09f24c');
  await QADashboardPage.clickViewRelatedDashboards();
  await browser.pause(10000);
});
it('should interact with download pdf', async () => {
  await browser.url('https://vynqa.vynsmart.com/dashboards/d2924b28251c42bbaf6c2ae75e09f24c');
  await QADashboardPage.downloadPDF();
  await browser.pause(10000);
});*/
it('should click vyn play Tab', async () => {
  await browser.url('https://vynqa.vynsmart.com/dashboards/d2924b28251c42bbaf6c2ae75e09f24c'); 
  await QADashboardPage1.openRecordingTab(); 
  await browser.pause(10000);
});


