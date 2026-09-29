class CartPage {
  constructor(page) {
    this.page = page;

    this.removeProductButton = page
      .locator('.cart_quantity_delete')
      .first();

    this.emptyCartMessage = page.getByText(
      /Cart is empty!/i
    );
  }

  async open() {
    await this.page.goto('/view_cart');
  }

  getProductByName(productName) {
    return this.page
      .getByText(productName)
      .first();
  }

  async removeFirstProduct() {
    await this.removeProductButton.click();
  }
}

module.exports = CartPage;