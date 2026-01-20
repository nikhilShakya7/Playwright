import { Locator, Page } from "@playwright/test";
import basePage from "./basePage";

export class EcommerceLogin extends basePage {
  readonly userEmail: Locator;
  readonly userPassword: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    super(page);
    this.userEmail = page.locator("#email");
    this.userPassword = page.locator("#password");
    this.loginButton = page.getByRole("button", { name: "LOGIN" });
  }

  async open() {
    await this.page.goto("https://practice.qabrains.com/ecommerce/login");
  }

  async login(email: string, password: string) {
    await this.userEmail.fill(email);
    await this.userPassword.fill(password);
    await this.loginButton.click();
  }
}
