import { assert } from 'chai';
import { binding, then, when, given } from 'cucumber-tsflow';
import { browser, ExpectedConditions as EC } from 'protractor';
import { LoginPage } from '../pages';

@binding()
export class LoginSteps {
    loginpage: LoginPage;
    constructor() {
        this.loginpage = new LoginPage();
    }

    @given('')
        async launchApplication(): Promise<void> {
          //await this.loginpage.navigateTo();  
        }
    }
}