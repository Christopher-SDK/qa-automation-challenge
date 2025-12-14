import { Page, expect } from '@playwright/test';

export class ProductsPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async addFirstTwoProductsToCart() {
    const buttons = await this.page.$$('button.btn_inventory');
    await buttons[0].click();
    await buttons[1].click();
  }

  async goToCart() {
    await this.page.click('.shopping_cart_link');
  }

  async validateProductsPage() {
    await expect(this.page.locator('.title')).toHaveText('Products');
  }
}
