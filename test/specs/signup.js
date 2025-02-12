describe('Vyn Sign Up Page', () => {
    it('should allow user to sign up with valid credentials', async () => {
        // 1. Open the sign-up page
        await browser.url('https://vynqa.vynsmart.com'); 
        
        const emailInput3= await $('//a[text()="Sign up"]'); // Or the appropriate selector
        await emailInput3.click();
        await emailInput.waitForDisplayed({ timeout: 5000 });
        /*await emailInput.setValue('vaibhav+qa2@humanlearning.com'); // Replace with a valid, unique email
        const passwordInput = await $('input[name="password"]'); // Or the appropriate selector
        await passwordInput.waitForDisplayed({ timeout: 5000 });
        await passwordInput.setValue('P@$$wOrd'); // Replace with a strong password
        const confirmPasswordInput = await $('input[name="confirmPassword"]'); // Or the appropriate selector
        await confirmPasswordInput.waitForDisplayed({ timeout: 5000 });
        await confirmPasswordInput.setValue('P@$$wOrd'); // Should match the password
        // 3. Click the Sign Up button
        const signUpButton = await $('button[type="submit"]'); // Or the appropriate selector
        await signUpButton.click();
        // 4. Wait for successful sign-up (e.g., check for a welcome message or redirect)
        const welcomeMessage = await $('.welcome-message'); // Replace with a selector that indicates successful sign-up
        await welcomeMessage.waitForDisplayed({ timeout: 10000 }); // Adjust timeout as needed
        // 5. Assert that sign-up was successful
        expect(await welcomeMessage.isDisplayed()).toBe(true);
        console.log('Sign-up successful!');
    });
    it('should display error messages for invalid input', async () => {
        // 1. Open the sign-up page
        await browser.url('https://login.vynsmart.com/signup'); // Or the correct sign-up URL
        // 2. Test with empty fields
        const signUpButton = await $('button[type="submit"]');
        await signUpButton.click();
        const requiredErrorMessages = await $$('.error-message[data-test="required"]'); // Example: Replace with your error message selectors
        expect(requiredErrorMessages.length).toBeGreaterThan(0); // Check if at least one error message is displayed
        // 3. Test with mismatched passwords
        const passwordInput = await $('input[name="password"]');
        await passwordInput.setValue('password123');
        const confirmPasswordInput = await $('input[name="confirmPassword"]');
        await confirmPasswordInput.setValue('password1234'); // Mismatch
        await signUpButton.click();
        const passwordMismatchError = await $('.error-message[data-test="password-mismatch"]'); // Replace with your selector
        expect(await passwordMismatchError.isDisplayed()).toBe(true);
        // ... Add more tests for other invalid input scenarios*/
    });
    // Add more test cases as needed (e.g., existing email, weak password, etc.)
});