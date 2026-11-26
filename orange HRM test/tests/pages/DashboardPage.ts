import BasePage from "./BasePage";
import { Page } from "@playwright/test";

export class DashboardPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }
  async gotoDashboard() {
    await this.page.goto(
      "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index"
    );
  }
}
