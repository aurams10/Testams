import { Page, Locator,expect } from "@playwright/test"

export default class SignUpLoginPage {

    readonly page: Page;
    readonly signNameInput: Locator
    readonly signEmailAdressInput: Locator
    readonly signButton: Locator
    readonly loginHeader: Locator
    readonly loginEmailAddressInput: Locator
    readonly passwordInput: Locator
    readonly loginButton: Locator



    constructor(page: Page) {
        this.page = page;
        this.signNameInput = page.getByPlaceholder('Name')
        this.signEmailAdressInput = page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address')
        this.signButton = page.getByRole('button', { name: 'Signup' })
        this.loginHeader = page.getByRole('heading', { name: 'Login to your account' })
        this.loginEmailAddressInput = page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address')
        this.passwordInput = page.getByPlaceholder('Password')
        this.loginButton = page.getByRole('button', { name: 'Login' })
    }

    async login(userEmail: string, password: string){

            await expect(this.loginHeader).toBeVisible();
            await this.loginEmailAddressInput.fill(userEmail)
            await this.passwordInput.fill(password)
            await this.loginButton.click()
        }
        async checkLoginHeader(){
            await expect(this.loginHeader).toBeVisible();
        }
        async signUp(username: string, email: string){
            await this.signNameInput.fill(username)
            await this.signEmailAdressInput.fill(email)
            await this.signButton.click()

        }
          
  
  
  
      }




    

