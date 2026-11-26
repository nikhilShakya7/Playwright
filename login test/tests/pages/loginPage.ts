import { expect, Locator, Page } from "@playwright/test";
import basePage from "./basePage";

export class LoginPage extends basePage {
  readonly username: Locator;
  readonly userpassword: Locator;
  readonly submitButton: Locator;
  readonly errroMessage: Locator;

  constructor(page: Page) {
    super(page);
    this.username = page.locator("#username");
    this.userpassword = page.locator("#password");
    this.submitButton = page.locator("#submit");
    this.errroMessage = page.locator("#error");
  }

  async open() {
    await this.page.goto(
      "https://practicetestautomation.com/practice-test-login/"
    );
  }
  async login(name: string, password: string) {
    await this.username.fill(name);
    await this.userpassword.fill(password);
    await this.submitButton.click();
  }

  async expError(errMessage: string) {
    await expect(this.errroMessage).toBeVisible;
    await expect(this.errroMessage).toHaveText(errMessage);
  }
}
