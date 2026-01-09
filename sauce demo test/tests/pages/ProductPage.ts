import { expect, type Locator, type Page } from "@playwright/test";
import BasePage from "./BasePage";

export class ProductsPage extends BasePage {
  readonly title: Locator;
  readonly firstItem: Locator;

  constructor(page: Page) {
    super(page);

    this.title = page.locator(".title");
    this.firstItem = page.locator(".inventory_item").first();
  }
  async expectProductsPage() {
    await expect(this.title).toBeVisible();
    await expect(this.title).toHaveText("Products");
  }
}
