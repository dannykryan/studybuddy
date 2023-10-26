// import test and expect from Playwright
import { test, expect } from "playwright/test";

test("Click add new", async ({ page }) => {
  await page.goto("http://127.0.0.1:5501/public-danny/login.html"); //go to the login page
  const username = page.getByLabel("Username");
  username.click(); //select username
  await username.fill("Dog"); //fill the input
  await expect(username).toHaveValue("Dog"); //checking the value matches what we expect
  const password = page.getByPlaceholder("Enter password").click(); //select password
  await password.fill("123"); //fill the input
  await expect(password).toHaveValue("123"); //checking the value matches what we expect
  const loginButton = page.getByRole("button", { name: "Login" }).click(); //click the submit button to login
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

  const title = await page.getByPlaceholder("Enter a title...").click();
  await title.fill("Javascript");
  await expect(title).toHaveValue("Javascript");

  const description = await page
    .getByPlaceholder("Provide a link to your resource...")
    .click();
  await description.fill("https://www.youtube.com/watch?v=1A6SrPwmGpg");
  await expect(description).toHaveValue(
    "https://www.youtube.com/watch?v=1A6SrPwmGpg"
  );

  const image = await page
    .getByPlaceholder("Add an accompanying image...")
    .click();
  await image.fill(
    "https://upload.wikimedia.org/wikipedia/commons/2/24/Circle-icons-image.svg"
  );
  await expect(image).toHaveValue(
    "https://upload.wikimedia.org/wikipedia/commons/2/24/Circle-icons-image.svg"
  );
  const resourceLink = await page
    .getByPlaceholder("Provide a link to your resource...")
    .click();
  await resourceLink.fill("You Suck At Accessibility (But You Don't Have To)");
  await expect(resourceLink).toHaveValue(
    "You Suck At Accessibility (But You Don't Have To)"
  );
  await page.getByRole("button", { name: "Submit" }).click();
  await page.goto("http://127.0.0.1:5501/public-danny/back-end.html");
});
