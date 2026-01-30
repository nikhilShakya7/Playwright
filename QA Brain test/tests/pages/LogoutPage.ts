import { Locator, Page } from "@playwright/test";
import basePage from "./basePage";

export class LogoutPage extends basePage {
  readonly logoutButton: Locator;

  constructor(page: Page) {
    super(page);
    this.logoutButton = page.getByRole("button", { name: "LOGOUT" });
  }

  async logout() {
    await this.logoutButton.click();
  }
}
