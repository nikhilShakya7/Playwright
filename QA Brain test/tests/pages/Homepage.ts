import { Locator, Page } from "@playwright/test";
import basePage from "./basePage";

export class Homepage extends basePage {
  readonly logoutButton: Locator;
  constructor(page: Page) {
    super(page);
    this.logoutButton = page.getByRole("button", { name: "LOGOUT" });
  }
  async gotoHome() {
    await this.page.goto("https://practice.qabrains.com/?logged=true");
  }

  async logout() {
    await this.logoutButton.click();
    await this.page.goto("https://practice.qabrains.com/");
  }
}
