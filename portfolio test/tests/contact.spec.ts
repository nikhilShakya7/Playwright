import { expect, test } from "@playwright/test";

test("contact page bhas all the required fields", async ({ page }) => {
  await page.goto("https://www.shakyanikhil18.com.np/contact");
  await page.getByLabel("Your name").isVisible();
  await page.getByPlaceholder("Name").isVisible();
  await page.getByLabel("Email Address").isVisible();
  await page.getByPlaceholder("Email").isVisible();
  await page.getByLabel("Subject").isVisible();
  await page.getByPlaceholder("Subject").isVisible();
  await page.getByLabel("Youe Message").isVisible();
  await page.getByPlaceholder("Your message").isVisible();
  await page.getByRole("button", { name: "Send Message" }).isVisible();
});

test("validation for empty fields", async ({ page }) => {
  await page.goto("https://www.shakyanikhil18.com.np/contact");
  await page.getByRole("button", { name: "Send Message" }).click();
  await expect(page.getByText("Name is required")).toBeVisible();
  await expect(page.getByText("Email is required")).toBeVisible();
  await expect(page.getByText("Please enter a subject")).toBeVisible();
  await expect(page.getByText("Please enter a message")).toBeVisible();
});

test("Email Validation", async ({ page }) => {
  await page.goto("https://www.shakyanikhil18.com.np/contact");
  await page.getByLabel("Email Address").fill("invalid email");
  await page.getByRole("button", { name: "Send Message" }).click();
  await page.getByText("Invalid Email").isVisible();
});
