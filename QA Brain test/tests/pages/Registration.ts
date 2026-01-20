import { Locator, Page } from "@playwright/test";
import basePage from "./basePage";

export class Registration extends basePage {
  readonly userName: Locator;
  readonly userCountry: Locator;
  readonly userAccount: Locator;
  readonly userEmail: Locator;
  readonly userPassword: Locator;
  readonly userConfirmPassword: Locator;
  readonly signupButton: Locator;

  constructor(page: Page) {
    super(page);
    this.userName = page.locator("#name");
    this.userCountry = page.locator("#country");
    this.userAccount = page.locator("#account");
    this.userEmail = page.locator("#email");
    this.userPassword = page.locator("#password");
    this.userConfirmPassword = page.locator("#confirm_password");
    this.signupButton = page.getByRole("button", { name: "SIGNUP" });
  }
  async open() {
    this.page.goto("https://practice.qabrains.com/registration");
  }
  async signup(
    name: string,
    country: string,
    account: string,
    email: string,
    password: string,
    confirmPassword: string
  ) {
    await this.userName.fill(name);
    await this.userCountry.selectOption(country);
    await this.userAccount.selectOption(account);
    await this.userEmail.fill(email);
    await this.userPassword.fill(password);
    await this.userConfirmPassword.fill(confirmPassword);
    await this.signupButton.click();
  }
}
