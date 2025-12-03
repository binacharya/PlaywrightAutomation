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


});
