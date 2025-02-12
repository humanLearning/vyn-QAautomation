const LoginPage = require('../pageobjects/vynpomlogin'); // Path is relative to the spec file
describe('Login Page', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open(); // Open the login page
        await LoginPage.login('vaibhav+qa@humanlearning.com', '9634Pb@@'); // Replace with valid test data
        // Add assertions to check for successful login (e.g., check URL, welcome message, etc.)
        //await expect(browser.getUrl()).toContain('/home'); // Example
    });
    it('should display error message with invalid credentials', async () => {
        await LoginPage.open();
        await LoginPage.login('invalid_email@example.com', 'wrong_password');
        expect(await LoginPage.isErrorMessageDisplayed()).toBe(true);
        const errorMessage = await LoginPage.getErrorMessageText();
        expect(errorMessage).toContain('Invalid email or password'); // Adjust the expected message
    });
    /*it('should login with google', async () => {
        await LoginPage.open();
        await LoginPage.loginWithPartner('Google');
        // check if new tab is opened or new url
    });
    it('should login with salesforce', async () => {
        await LoginPage.open();
        await LoginPage.loginWithPartner('Salesforce');*/
        // check if new tab is opened or new url
    });

























