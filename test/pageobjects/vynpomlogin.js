class LoginPage {
    constructor() {
        this.emailInput = $('[id="login-embedded-form-email"]'); // Use more specific selectors if possible
        this.passwordInput = $('[id="login-password"]'); // Use more specific selectors if possible
        this.loginButton = $('[type="submit"]'); // Or the appropriate selector
        this.loginButton1 = $('[id="btn-login"]'); 
        this.errorMessage = $('[id="login-message"]'); // Or the appropriate selector
        // this.partnerLoginButton = (partner) => $(`//button[text()="${partner}"]`) // example for dynamic selector
    }
    async open() {
        await browser.url('https://vynqa.vynsmart.com'); // Or the correct login path
    }
    async login(email, password) {
        await this.emailInput.setValue(email);
        await this.passwordInput.setValue(password);
        await this.loginButton.click();
    }
    // async loginWithPartner(partner) {
        // await this.partnerLoginButton(partner).click();
    
    async isErrorMessageDisplayed() {
        return await this.errorMessage.waitForDisplayed({ timeout: 5000 }); // Wait for it to appear
    }
    async getErrorMessageText() {
        return await this.errorMessage.getText();
    }
}
 
    module.exports = new LoginPage(); 






