import { expect, type Locator, type Page } from "@playwright/test";
import BasePage from "./BasePage";

export class ProductsPage extends BasePage {
  readonly title: Locator;
  readonly firstItem: Locator;
  readonly addToCartButton: Locator;
  readonly cart: Locator;

  constructor(page: Page) {
    super(page);

    this.title = page.locator(".title");
    this.addToCartButton = page.locator("#add-to-cart-sauce-labs-backpack");
    this.firstItem = page.locator(".inventory_item").first();
    this.cart = page.locator('a[href="/cart"]');
  }
  async expectProductsPage() {
    await expect(this.title).toBeVisible();
    await expect(this.title).toHaveText("Products");
  }

  async addProduct() {
    await this.addToCartButton.click();
  }
  async gotoCart() {
    await this.cart.click();
    this.page.goto("https://www.saucedemo.com/cart.html");
  }
}
