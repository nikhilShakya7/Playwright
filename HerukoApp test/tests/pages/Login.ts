import BasePage from "./BasePage";
import { expect, Locator, Page } from "@playwright/test";
export class Login extends BasePage {
  readonly username: Locator;
  readonly userPassword: Locator;
  readonly loginButton: Locator;
  readonly errorMesage: Locator;

  constructor(page: Page) {
    super(page);
    this.username = page.locator("#username");
    this.userPassword = page.locator("#password");
    this.loginButton = page.getByRole("button", { name: "Login" });
    this.errorMesage = page.locator("#flash");
  }

  async open() {
    await this.page.goto("https://the-internet.herokuapp.com/login");
  }
  async login(name: string, password: string) {
    await this.username.fill(name);
    await this.userPassword.fill(password);
    await this.loginButton.click();
  }

  async expError(message: string) {
    await expect(this.errorMesage).toBeVisible();
    await expect(this.errorMesage).toHaveText(message);
  }
}
