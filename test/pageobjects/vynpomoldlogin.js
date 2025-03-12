class LoginPage2{
    get OldloginBox(){
        return $('[id="login-button"]')
    }

    get usernameTextBox1(){
        return $('[id="login-email"]')
    }
    get passwordTextBox1(){
        return $('[id="login-password"]')
    }
    
    get loginButton2(){
        return $('[id="btn-login"]')
    }
    
    async login(username,password){
        console.log('<<<<<<<<<<< login called')
        await this.OldloginBox.click()
        await this.usernameTextBox1.setValue(username)
        await this.passwordTextBox1.setValue(password)
        await this.loginButton2.click()
        
        


    }
    
}
module.exports = new LoginPage2(); 