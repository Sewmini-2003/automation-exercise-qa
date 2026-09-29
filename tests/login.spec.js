const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');

test('@smoke TC-002 - login with invalid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.open();

  await loginPage.goToLogin();

  await loginPage.login(
    'invaliduser@example.com',
    'wrongpassword123'
  );

  await expect(
    loginPage.loginError
  ).toBeVisible();
});