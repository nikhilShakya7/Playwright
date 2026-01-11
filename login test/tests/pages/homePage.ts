import { expect, Locator, Page } from "@playwright/test";
import basePage from "./basePage";

export class HomePage extends basePage {
  readonly logOutButton: Locator;
  constructor(page: Page) {
    super(page);
    this.logOutButton = page.getByRole("button", { name: "Log Out" });
  }

  async gotoHome() {
    await this.goto(
      "https://practicetestautomation.com/logged-in-successfully/"
    );
    await expect(this.page).toHaveURL(/logged-in-successfully/);
  }

  async logout() {
    await this.logOutButton.click();
    await expect(this.page).toHaveURL(/practice-test-login/);
  }
}
