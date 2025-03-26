class LoginPage1{

    get usernameTextBox(){
        return $('[id="login-embedded-form-email"]')
    }
    get passwordTextBox(){
        return $('[id="login-password"]')
    }
    get loginButton(){
        return $('[type="submit"]')
    }
    get loginButton1(){
        return $('[id="btn-login"]')
    }
    get signupclick(){
        return $ ('xpath=/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[3]/a[1]]')
    }
    get signupusername(){
        return $ ('xpath=/html[1]/body[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[3]/input[1]')
    }
    get passsword1(){
        return $ ('[id="signup-password"]')
    }
    get passsword2(){
        return $ ('["signup-password-confirmation]')
    }
    get signupbutton(){
        return $ ('[id="btn-signup"]')
    }
    async login(username,password){
        await this.usernameTextBox.setValue(username)
        await this.loginButton.click()
        await this.passwordTextBox.setValue(password)
        
        await this.loginButton1.click()


    }
    async signup(username1,passwordsignup,Reenterpassword){
        await this.signupclick.click()
        await this.signupusername.setValue(username1)
        await this.passsword1.setValue(passwordsignup)
        await this.passsword2.setValue(Reenterpassword)
        

        await this.signupbutton.click()
    }
}
module.exports = new LoginPage1(); 