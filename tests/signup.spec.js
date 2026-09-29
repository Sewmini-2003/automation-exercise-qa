const { test, expect } = require('@playwright/test');
const SignupPage = require('../pages/SignupPage');

test('TC-003 - signup form is displayed', async ({ page }) => {
  const signupPage = new SignupPage(page);

  await signupPage.open();

  await signupPage.goToSignup();

  await expect(
    signupPage.newUserSignupTitle
  ).toBeVisible();

  await expect(
    signupPage.signupName
  ).toBeVisible();

  await expect(
    signupPage.signupEmail
  ).toBeVisible();

  await expect(
    signupPage.signupButton
  ).toBeVisible();
});