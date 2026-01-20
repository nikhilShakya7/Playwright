import { expect, Locator, Page } from "@playwright/test";
import basePage from "./basePage";

export class LoginPage extends basePage {
  readonly userEmail: Locator;
  readonly userPassword: Locator;
  readonly loginButton: Locator;
  readonly errorMessage: Locator;

  constructor(page: Page) {
    super(page);
    this.loginButton = page.getByRole("button", { name: "LOGIN" });
    this.userEmail = page.locator("#email");
    this.userPassword = page.locator("#password");
    this.errorMessage = page.getByText("Email is a required field");
  }
  async open() {
    await this.page.goto("https://practice.qabrains.com/");
  }

  async login(email: string, password: string) {
    await this.userEmail.fill(email);
    await this.userPassword.fill(password);
    await this.loginButton.click();
  }
  async expError(message: string) {
    await expect(this.errorMessage).toBeVisible;
    await expect(this.errorMessage).toHaveText(message);
  }
}
