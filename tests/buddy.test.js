// import test and expect from Playwright
import { test, expect } from "playwright/test";

test("Click add new", async ({ page }) => {
    await page.goto("http://127.0.0.1:5501/public-danny/login.html");
    await page.getByPlaceholder("Enter username...").click().fill("he");
    await page.getByPlaceholder("Enter password...").click().fill("123");
    await page.getByRole("button", { name: "Login" }).click();
  await page.goto("http://127.0.0.1:5501/public-danny/index.html");
  await page
    .getByRole("link", {
      name: "RESOURCE LIBRARY A library of resources to support your learning illustration of a man with big ideas",
    })
    .click();
  await page
    .getByRole("link", {
      name: "BACK-END JS, Databases, APIs and everything in between. illustration of a graph",
    })
    .click();
  await page.goto("http://127.0.0.1:5501/public-danny/back-end.html");
  await page.locator("#submit-button").click();
  await page.getByPlaceholder("Enter a title...").click().fill("Javascript");
  await page
    .getByPlaceholder("Provide a link to your resource...")
    .click()
    .fill("https://www.youtube.com/watch?v=1A6SrPwmGpg");
  await page
    .getByPlaceholder("Add an accompanying image...")
    .click()
    .fill(
      "https://upload.wikimedia.org/wikipedia/commons/2/24/Circle-icons-image.svg"
    );
  await page
    .getByPlaceholder("Provide a link to your resource...")
    .click()
    .fill("You Suck At Accessibility (But You Don't Have To)");
  await page.getByRole("button", { name: "Submit" }).click();
  await page.goto("http://127.0.0.1:5501/public-danny/back-end.html");
});
