const LoginPage2 = require('../pageobjects/vynpomoldlogin'); // Path is relative to the spec file
const QADashboardPage = require('../pageobjects/qaDashboardpage');

describe('Mocha Test Lifecycle Example', () => {

    console.log('1️⃣ Suite is declared (but not executed yet)');
  
    before(async () => {
      console.log('2️⃣ Before All - Runs ONCE before ALL tests');
      browser.url('https://vynqa2.vynsmart.com')
      await LoginPage2.login('vaibhav+qa@humanlearning.com','9634Pb@@');
      await expect(browser).toHaveUrlContaining('/dashboards');
      await browser.pause(10000);
      await QADashboardPage.open();
    });
  
    beforeEach(async () => {
      console.log('3️⃣ Before Each - Runs BEFORE every single test');
    });
  
    it('Test Case 1', async () => {
      console.log('4️⃣ Running Test Case 1');
    });
  
    it('Test Case 2', async () => {
      console.log('4️⃣ Running Test Case 2');
    });
  
    afterEach(async () => {
      console.log('5️⃣ After Each - Runs AFTER every single test');
    });
  
    after(async () => {
      console.log('6️⃣ After All - Runs ONCE after ALL tests');
    });
  
  });