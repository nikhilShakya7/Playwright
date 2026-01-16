import { Page } from "@playwright/test";
import BasePage from "./BasePage";

export class Dashboard extends BasePage {
  constructor(page: Page) {
    super(page);
  }
  async gotoDashboard() {
    await this.goto(
      "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index"
    );
  }
}
