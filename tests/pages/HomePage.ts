import { Page, Locator, expect } from "@playwright/test"

export default class HomePage {

    readonly page: Page;
    readonly signUpAndLoginButton: Locator;
    readonly signUpHeader: Locator;
    readonly deleteAccountButton: Locator;
    readonly usernameText: Locator
    readonly logouButton: Locator
    readonly contactUsButton: Locator
    readonly testCasesButton: Locator
    readonly productButton: Locator


    constructor(page: Page) {
        this.page = page;
        this.signUpAndLoginButton = page.getByRole('link', { name: "Signup / Login" })
        this.signUpHeader = page.getByRole('heading', { name: 'New User Signup!' })
        this.deleteAccountButton = page.getByRole('link', { name: 'Delete Account' })
        this.usernameText = page.getByText('Logged in as', { exact: false })
        this.logouButton = page.getByRole('link', { name: 'Logout' })
        this.contactUsButton=page.getByRole('link', { name: 'Contact us' })
        this.productButton = page.locator('a[href="/products"]');

        //this.testCasesButton=page.getByRole('link', { name: ' Test Cases' })

    }
    async visit() {
        await this.page.goto('https://www.automationexercise.com/');
        await this.page.waitForLoadState();
        await expect(this.page).toHaveTitle('Automation Exercise');
    }
    async goToLoginAndSignUpPage() {
        await this.signUpAndLoginButton.click();
    }

    async checkUsername(username: string) {
        await expect(this.usernameText).toBeVisible()
        await expect(this.usernameText).toContainText(username)
    }
    async logout(){
        await this.logouButton.click()

    }
    async goToContactUsPage(){
        await this.contactUsButton.click
        await expect (this.page.url()).toContain('contact_us')

    }
    async goToTestCases(){
        await this.testCasesButton.click
        await expect (this.page.url()).toContain('test_cases')

    }
   
  
  
}