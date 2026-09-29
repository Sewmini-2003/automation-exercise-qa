class ProductsPage {
  constructor(page) {
    this.page = page;

    this.allProductsTitle = page.getByText(
      'All Products'
    );

    this.searchInput = page.locator(
      '#search_product'
    );

    this.searchButton = page.locator(
      '#submit_search'
    );

    this.searchedProductsTitle = page.getByText(
      'Searched Products'
    );

    this.productCards = page.locator(
      '.features_items .product-image-wrapper'
    );

    this.firstProductAddToCartButton = page
      .locator('a[data-product-id="1"]')
      .first();

    this.addedMessage = page.getByText(
      'Added!',
      { exact: true }
    );

    this.viewCartLink = page.getByRole('link', {
      name: 'View Cart'
    });
  }

  async open() {
    await this.page.goto('/products');
  }

  async searchProduct(productName) {
    await this.searchInput.fill(productName);
    await this.searchButton.click();
  }

  async addFirstProductToCart() {
    await this.firstProductAddToCartButton.click();
  }

  async goToCartAfterAddingProduct() {
    await this.viewCartLink.click();
  }
}

module.exports = ProductsPage;