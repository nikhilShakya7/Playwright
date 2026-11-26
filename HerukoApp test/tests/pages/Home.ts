import { Locator, Page } from "@playwright/test";
import BasePage from "./BasePage";

export class Home extends BasePage {
  readonly logoutButton: Locator;

  constructor(page: Page) {
    super(page);
    this.logoutButton = page.getByRole("link", { name: "Logout" });
  }
  async gotoHome() {
    await this.page.goto("https://the-internet.herokuapp.com/secure");
  }

  async logout() {
    await this.logoutButton.click();
    await this.page.goto("https://the-internet.herokuapp.com/login");
  }
}
