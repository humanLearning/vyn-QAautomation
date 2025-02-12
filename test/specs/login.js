describe('Login Functionality', () => { 
    it('should log in with valid credentials', async () => { 
        await browser.url('https://vynqa.vynsmart.com'); 
        const emailInput= await $('[id="login-embedded-form-email"]');
        await emailInput.waitForDisplayed({timeout:5000});
        await emailInput.setValue('vaibhav+qa@humanlearning.com'); // Replace with a valid email
        const loginButton1 = await $('[type="submit"]'); // Use appropriate selector for login button
        await loginButton1.click();
        // 4. Wait for the password input field to be visible
        const passwordInput = await $('[id="login-password"]'); // Use appropriate selector for password input
        await passwordInput.waitForDisplayed({ timeout: 10000 });
        // 5. Enter the password
        await passwordInput.setValue('9634Pb@@'); // Replace with a valid password
        // 6. Click the login button
        const loginButton = await $('[id="btn-login"]'); // Use appropriate selector for login button
        await loginButton.click();
        await loginButton.waitForDisplayed({ timeout: 10000 });
        const homePageElement = await $('//a[text()="Dashboards"]');
        await homePageElement.click(); 
        await homePageElement.waitForDisplayed({ timeout: 10000 }); 
        const VynsElement = await $('//a[text()="Vyns"]'); 
        await VynsElement.click();
        await VynsElement.waitForDisplayed({ timeout: 10000 }); 
        
        const CapturelinksElement = await $('//a[text()="Capture Links"]'); 
        await CapturelinksElement.click();
        await CapturelinksElement.waitForDisplayed({ timeout: 10000 }); 

        const AllElement = await $('//a[text()="All"]'); 
        await AllElement.click();
        await AllElement.waitForDisplayed({ timeout: 10000 }); 
        const NotificationElement = await $('[class="dropdown-toggle nav-link"]');
        await NotificationElement.click(); 
        await NotificationElement.waitForDisplayed({ timeout: 10000 }); 

       

    });
});
it('should display error message with invalid credentials', async () => {
    // 1. Open the login page
    await browser.url('https://vynqa.vynsmart.com');
    // 2. Enter invalid email and password
    const emailInput = await $('[id="login-embedded-form-email"]');
    await emailInput.setValue('abc@gm.com');
    const loginButton2 = await $('[type="submit"]'); // Use appropriate selector for login button
    await loginButton2.click();
    const passwordInput1 = await $('[id="login-password"]');
    await passwordInput1.setValue('invalid_password');
    // 3. Click the login button
    const loginButton1 = await $('[id="btn-login"]');
    await loginButton1.click();
    // 4. Wait for the error message to be displayed
    const errorMessage = await $('[id=login-message]'); // Replace with the actual selector for the error message
    await errorMessage.waitForDisplayed({ timeout: 5000 });
    // 5. Assert that the error message is displayed
    expect(await errorMessage.isDisplayed()).toBe(true);
    console.log('Error message displayed for invalid credentials.');
});
// Add more test cases as needed (e.g., empty fields, password reset, etc.)









