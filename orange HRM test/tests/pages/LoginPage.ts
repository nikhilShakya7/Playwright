import { expect, Locator, Page } from "@playwright/test";
import BasePage from "./BasePage";

export class LoginPage extends BasePage {
  readonly username: Locator;
  readonly userpassword: Locator;
  readonly loginButton: Locator;
  readonly errorMessage: Locator;
  readonly reqMessage: Locator;

  constructor(page: Page) {
    super(page);
    this.username = page.getByPlaceholder("Username");
    this.userpassword = page.getByPlaceholder("Password");
    this.loginButton = page.getByRole("button", { name: "Login" });
    this.errorMessage = page.getByRole("alert");
    this.reqMessage = page.getByText("Required");
  }
  async open() {
    await this.goto(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
  }

  async login(name: string, password: string) {
    await this.username.fill(name);
    await this.userpassword.fill(password);
    await this.loginButton.click();
  }

  async expError(message: string) {
    await expect(this.errorMessage).toBeVisible();
    await expect(this.errorMessage).toHaveText(message);
  }
}
