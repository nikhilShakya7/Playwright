import { expect, Locator, Page } from "@playwright/test";
import BasePage from "./BasePage";

export class CheckoutPage extends BasePage {
  readonly userFirstName: Locator;
  readonly userLastName: Locator;
  readonly userZipCode: Locator;
  readonly continueButton: Locator;
  readonly errorMessage: Locator;

  constructor(page: Page) {
    super(page);
    this.continueButton = page.locator("#continue");
    this.userFirstName = page.locator("#first-name");
    this.userLastName = page.locator("#last-name");
    this.userZipCode = page.locator("#postal-code");
    this.errorMessage = page.locator('[data-test="error"]');
  }

  async open() {
    await this.goto("https://www.saucedemo.com/checkout-step-one.html");
  }

  async checkout(firstName: string, lastname: string, zipCode: string) {
    await this.userFirstName.fill(firstName);
    await this.userLastName.fill(lastname);
    await this.userZipCode.fill(zipCode);
    await this.continueButton.click();
  }

  async expectError(message: string) {
    await expect(this.errorMessage).toBeVisible();
    await expect(this.errorMessage).toHaveText(message);
  }
}
