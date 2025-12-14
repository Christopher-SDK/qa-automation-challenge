import { Page, expect } from '@playwright/test';

export class CartPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async validateCartHasProducts() {
        await expect(this.page.locator('.cart_item')).toHaveCount(2);
    }

    async checkout() {
        await this.page.click('#checkout');
    }
}
