class SignupPage {
  constructor(page) {
    this.page = page;

    this.signupLoginLink = page.getByRole('link', {
      name: /Signup \/ Login/
    });

    this.newUserSignupTitle = page.getByText(
      'New User Signup!'
    );

    this.signupName = page.locator(
      'input[data-qa="signup-name"]'
    );

    this.signupEmail = page.locator(
      'input[data-qa="signup-email"]'
    );

    this.signupButton = page.locator(
      'button[data-qa="signup-button"]'
    );
  }

  async open() {
    await this.page.goto('/');
  }

  async goToSignup() {
    await this.signupLoginLink.click();
  }
}

module.exports = SignupPage;