import { test } from '@playwright/test';
import { InventoryPage } from '../pages/Inventory/InventoryPage';

test.describe('Inventory Page Validations', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to inventory page before each test
    await page.goto('/inventory.html');
  });

  test('Page should load with correct title', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);
    await inventoryPage.verifyPageLoaded();
  });

  test('Logo text should be correct', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);
    await inventoryPage.validateLogoText('Swag Labs');
  });

  test('Inventory count should be greater than 5', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);
    await inventoryPage.validateInventoryCount();
  });

  test('Each inventory item should have image, title, description and price', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);
    await inventoryPage.validateEachInventoryItem();
  });
test('Validate price format on inventory page', async ({ page }) => {
  const inventoryPage = new InventoryPage(page);

  await inventoryPage.validatePriceFormat();
});

test('Validate prices sorted High to Low', async ({ page }) => {
  const inventoryPage = new InventoryPage(page);
  await inventoryPage.validatePriceHighToLowSort();
});

test('Validate Z → A sorting', async ({ page }) => {
  const inventoryPage = new InventoryPage(page);
  await inventoryPage.validateSortZtoA();
});
test('validate Cartcount increase', async ({ page }) => {
 const inventoryPage = new InventoryPage(page);
await inventoryPage.validateCartCountIncrease();

});

test('validate Cartcount increase incrementally', async ({ page }) => {
 const inventoryPage = new InventoryPage(page);
await inventoryPage.validateCartCountIncrementsForAllItems();

});
test('Validate product name color changes on hover', async ({ page }) => {
  const inventoryPage = new InventoryPage(page);

 
  const productName = 'Sauce Labs Backpack';
  await inventoryPage.validateHoverColorChange(productName);
});
});
