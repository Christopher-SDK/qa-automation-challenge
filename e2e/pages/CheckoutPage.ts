import { Page, expect } from '@playwright/test';

export class CheckoutPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async completeCheckout() {
        await this.page.fill('#first-name', 'Christopher');
        await this.page.fill('#last-name', 'Arias');
        await this.page.fill('#postal-code', '00000');
        await this.page.click('#continue');
        await this.page.click('#finish');
    }

    async validateOrderCompleted() {
        const confirmation = this.page.locator('.complete-header');
        await confirmation.waitFor({ state: 'visible', timeout: 15000 });

        await expect(confirmation).toContainText('Thank you for your order!');
    }

}
