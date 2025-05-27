import { Page, Locator } from "@playwright/test"

export default class SignUpPage {

    readonly page: Page;
    readonly mrRadioButton: Locator
    readonly passwordInput : Locator
    readonly daysDropdown: Locator
    readonly mothsDropdown: Locator
    readonly yearsDropdown: Locator
    readonly newsLetterCheckbox: Locator
    readonly specialOffersChecbox: Locator
    readonly firstnameInput: Locator
    readonly lastnameInput: Locator
    readonly companyInput: Locator
    readonly addressInput: Locator
    readonly address2Input: Locator
    readonly contryDropDown: Locator
    readonly stateInput: Locator
    readonly cityInput: Locator
    readonly zipcodeInput: Locator
    readonly mobilNumberInput: Locator
    readonly createAccountButton: Locator

    constructor(page: Page) {
        this.page = page;
        this.mrRadioButton=page.getByLabel('Mr.')
        this.passwordInput=page.getByLabel('Password')
        this.daysDropdown=page.locator('#days')
        this.mothsDropdown=page.locator('#months')
        this.yearsDropdown=page.locator('#years')
        this.newsLetterCheckbox= page.getByLabel('Sign up for our newsletter!')
        this.specialOffersChecbox=page.getByLabel('Receive special offers from')
        this.firstnameInput=page.getByLabel('First name')
        this.lastnameInput=page.getByLabel('Last name')
        this.companyInput= page.getByLabel('Company',{exact: true})
        this.addressInput=page.getByLabel('Address *')
        this.address2Input=page.getByLabel('Address 2')
        this.contryDropDown=page.getByLabel('Country')
        this.stateInput=page.getByLabel('State')
        this.cityInput=page.getByLabel('City')
        this.zipcodeInput=page.locator('#zipcode')
        this.mobilNumberInput=page.getByLabel('Mobile Number *')
        this.createAccountButton=page.getByRole('button',{name:'Create Account'})




    }

}