import {browser, by, element, ElementFinder, ExpectedConditions as EC} from 'protractor';
export class LoginPage {
    get usernameInput(): ElementFinder {
        return element(by.xpath('loginUsername'));
    }
    get passwordInput(): ElementFinder {
        return element(by.name('loginPassword'));
    }
    get loginButton(): ElementFinder {
        return element(by.xpath('//*[contains(text(),"Login")]'));
    }
    async navigateTo(): Promise<void> {
        await browser.get(browser.baseUrl);
        await browser.wait(EC.urlContains(browser.baseUrl), 8000);
    }
}