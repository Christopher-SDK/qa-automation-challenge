import { Given, When, Then, setDefaultTimeout } from '@cucumber/cucumber';
import { chromium, Page, Browser } from 'playwright';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';

let browser: Browser;
let page: Page;

let loginPage: LoginPage;
let productsPage: ProductsPage;
let cartPage: CartPage;
let checkoutPage: CheckoutPage;

setDefaultTimeout(30 * 1000);

Given('the user is logged in with valid credentials', async () => {
    browser = await chromium.launch({ headless: false });
    page = await browser.newPage();

    loginPage = new LoginPage(page);
    productsPage = new ProductsPage(page);
    cartPage = new CartPage(page);
    checkoutPage = new CheckoutPage(page);

    await loginPage.navigate();
    await loginPage.login('standard_user', 'secret_sauce');
    await productsPage.validateProductsPage();
});

When('the user adds two products to the cart', async () => {
    await productsPage.addFirstTwoProductsToCart();
});

When('the user views the cart', async () => {
    await productsPage.goToCart();
    await cartPage.validateCartHasProducts();
});

When('completes the checkout form', async () => {
    await cartPage.checkout();
    await checkoutPage.completeCheckout();
});

Then('the purchase is completed successfully', async () => {
    await checkoutPage.validateOrderCompleted();
    await browser.close();
});

