class HomePage {
  constructor(page) {
    this.page = page;

    this.productsLink = page.getByRole('link', {
      name: 'Products'
    });

    this.signupLoginLink = page.getByRole('link', {
      name: /Signup \/ Login/
    });
  }

  async open() {
    await this.page.goto('/');
  }
}

module.exports = HomePage;