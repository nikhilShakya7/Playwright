import { expect, Locator, Page } from "@playwright/test";
import basePage from "./basePage";

export class LoginPage extends basePage {
  readonly userEmail: Locator;
  readonly userPassword: Locator;
  readonly loginButton: Locator;
  readonly errorMessage: Locator;
  //   readonly emailValidation: Locator;
  //   readonly credentialsValidation: Locator;

  constructor(page: Page) {
    super(page);
    this.loginButton = page.getByRole("button", { name: "LOGIN" });
    this.userEmail = page.locator("#email");
    this.userPassword = page.locator("#password");
    this.errorMessage = page.getByText("Email is a required field");
    // this.emailValidation = page.getByText("Email must be a valid email");
    // this.credentialsValidation = page.getByText(
    //   "Your email and password both are invalid!"
    // );
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

  //   async isWrongCredentials(message: string) {
  //     await expect(this.credentialsValidation).toBeVisible();
  //     await expect(this.credentialsValidation).toHaveText(
  //       "Your email and password both are invalid!"
  //     );
  //   }
  //   async isValidEmail(message: string) {
  //     await expect(this.emailValidation).toBeVisible();
  //     await expect(this.emailValidation).toHaveText(message);
  //   }
}
