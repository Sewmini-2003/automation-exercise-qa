const { test, expect } = require('@playwright/test');
const HomePage = require('../pages/HomePage');

test('@smoke TC-001 - home page loads successfully', async ({ page }) => {  const homePage = new HomePage(page);

  await homePage.open();

  await expect(page).toHaveTitle(
    /Automation Exercise/
  );

  await expect(
    homePage.productsLink
  ).toBeVisible();

  await expect(
    homePage.signupLoginLink
  ).toBeVisible();
});