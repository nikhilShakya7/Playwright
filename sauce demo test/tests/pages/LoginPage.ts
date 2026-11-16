import { Locator, Page } from "@playwright/test";
import BasePage from "./BasePage";

export class LoginPage extends BasePage {
  readonly username: Locator;
  readonly userpassword: Locator;
  readonly loginButtton: Locator;

  constructor(page: Page) {
    super(page);
    this.username = page.getByPlaceholder("Username");
    this.userpassword = page.getByPlaceholder("Password");
    this.loginButtton = page.getByRole("button", { name: "Login" });
  }

  async open() {
    this.page.goto("https://www.saucedemo.com/");
  }

  async login(name: string, password: string) {
    await this.username.fill(name);
    await this.userpassword.fill(password);
    await this.loginButtton.click();
  }
}
