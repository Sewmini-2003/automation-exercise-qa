const { test, expect } = require('@playwright/test');

const ProductsPage = require('../pages/ProductsPage');
const CartPage = require('../pages/CartPage');


test('@smoke TC-006 - add a product to cart', async ({ page }) => {
  const productsPage = new ProductsPage(page);
  const cartPage = new CartPage(page);

  await productsPage.open();

  await productsPage.addFirstProductToCart();

  await expect(
    productsPage.addedMessage
  ).toBeVisible();

  await productsPage.goToCartAfterAddingProduct();

  await expect(
    cartPage.getProductByName('Blue Top')
  ).toBeVisible();
});


test('TC-007 - remove a product from cart', async ({ page }) => {
  const productsPage = new ProductsPage(page);
  const cartPage = new CartPage(page);

  await productsPage.open();

  await productsPage.addFirstProductToCart();

  await expect(
    productsPage.addedMessage
  ).toBeVisible();

  await productsPage.goToCartAfterAddingProduct();

  await expect(
    cartPage.getProductByName('Blue Top')
  ).toBeVisible();

  await cartPage.removeFirstProduct();

  await expect(
    cartPage.getProductByName('Blue Top')
  ).not.toBeVisible();
});