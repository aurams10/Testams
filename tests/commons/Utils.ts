import { Page, Locator, expect } from "@playwright/test"

export default class Utils {

    readonly page: Page;
    readonly isTextExact: boolean

    constructor(page: Page) {
        this.page = page;
        this.isTextExact = false
    }

    async checkTextIsVisible(text: string, isTextExact = this.isTextExact, selector?: string) {
       let locator;
        if (selector) {
        locator = this.page.locator(selector);
         } else {
            locator = this.page.getByText(text, { exact: isTextExact });
         }
        await expect(locator).toBeVisible();
    }
    
    
    async checkUrlContains(text: string) {
        expect(this.page.url()).toContain(text)


    }




}
