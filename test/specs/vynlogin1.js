const LoginPage1 = require('../pageobjects/vynpomlogin1'); // Path is relative to the spec file
describe('Login Page', () => {
    it('should login with valid credentials', async () => {
        browser.url('https://vynqa.vynsmart.com')
        LoginPage1.login('vaibhav+qa@humanlearning.com','9634Pb@@')
        await browser.pause(10000);
    })
    it('should login with search link credentials', async () => {
        browser.url('https://vynqa.vynsmart.com/vyns?search=qwerty12345')
        LoginPage1.login('vaibhav+qa@humanlearning.com','9634Pb@@')
        await browser.pause(10000);
    })

    it('should login with playvyn credentials', async () => {
        browser.url('https://vynqa.vynsmart.com/play/d384bce349ac490ab79e1c5d5ec30476 ')
        LoginPage1.login('vaibhav+qa@humanlearning.com','9634Pb@@')
        await browser.pause(10000);
    })
    it('should not login with invalid credentials', async () => {
        browser.url('https://vynqa.vynsmart.com')
        LoginPage1.login('vaibv+qa@humaearning.com','9634Pb@@')
        await browser.pause(10000);
    })
    it('signup with valid credentials', async () => {
        browser.url('https://vynqa.vynsmart.com')
        // await LoginPage1.signup();
        LoginPage1.signup('vaibhav+qa5@humanlearning.com','9634Pb@@','9634Pb@@')
        await browser.pause(20000);
})
})