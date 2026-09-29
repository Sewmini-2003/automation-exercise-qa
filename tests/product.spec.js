const { test, expect } = require('@playwright/test');
const ProductsPage = require('../pages/ProductsPage');

test('@smoke TC-004 - search for a product', async ({ page }) => {
  const productsPage = new ProductsPage(page);

  await productsPage.open();

  await expect(
    productsPage.allProductsTitle
  ).toBeVisible();

  await productsPage.searchProduct(
    'Blue Top'
  );

  await expect(
    productsPage.searchedProductsTitle
  ).toBeVisible();

  await expect(
    page.getByText('Blue Top').first()
  ).toBeVisible();
});


test('TC-005 - search for a non-existing product', async ({ page }) => {
  const productsPage = new ProductsPage(page);

  await productsPage.open();

  await productsPage.searchProduct(
    'XYZNonExistingProduct123'
  );

  await expect(
    productsPage.searchedProductsTitle
  ).toBeVisible();

  await expect(
    productsPage.productCards
  ).toHaveCount(0);
});