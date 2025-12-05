import { test as baseTest, Page, expect } from "@playwright/test";
import { InventoryLocators } from './locators';
import { SortUtils } from '../../utils/sortUtils';

export class InventoryPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async verifyPageLoaded() {
    await baseTest.step('Verify inventory page loaded with correct title', async () => {
      await expect(this.page.locator(InventoryLocators.title)).toHaveText('Products');
    });
  }

  async validateLogoText(expectedText: string) {
    await baseTest.step(`Validate logo text is "${expectedText}"`, async () => {
      const logoLocator = this.page.locator(InventoryLocators.logo);
      await expect(logoLocator).toBeVisible();
      await expect(logoLocator).toHaveText(expectedText);
    });
  }

  async validateInventoryCount(minCount: number = 5) {
    await baseTest.step(`Validate inventory count is greater than ${minCount}`, async () => {
      const items = this.page.locator(InventoryLocators.inventoryItems);
      const count = await items.count();
      expect(count).toBeGreaterThan(minCount);
    });
  }

  async validateEachInventoryItem() {
    const items = this.page.locator(InventoryLocators.inventoryItems);
    const count = await items.count();

    for (let i = 0; i < count; i++) {
      const item = items.nth(i);

      const image = item.locator(InventoryLocators.inventoryItemImage);
      const title = item.locator(InventoryLocators.inventoryItemName);
      const desc = item.locator(InventoryLocators.inventoryItemDesc);
      const price = item.locator(InventoryLocators.inventoryItemPrice);

      // Get the product title text to use in step description
      const productName = await title.innerText();

      await baseTest.step(`Validate product: ${productName}`, async () => {
        await expect(image, `Image should be visible for ${productName}`).toBeVisible();
        await expect(title, `Title should not be empty for ${productName}`).not.toBeEmpty();
        await expect(desc, `Description should not be empty for ${productName}`).not.toBeEmpty();
        await expect(price, `Price should not be empty for ${productName}`).not.toBeEmpty();
      });
    }
  }
  async validatePriceFormat() {
  const priceElements = this.page.locator('.inventory_item_price');
  const count = await priceElements.count();

  const priceRegex = /^\$\d+(\.\d{1,2})?$/; 

  for (let i = 0; i < count; i++) {
    const priceText = await priceElements.nth(i).innerText();
    expect(priceRegex.test(priceText)).toBe(true);
  }
}
async validatePriceHighToLowSort() {
    
    await this.page.locator(InventoryLocators.sortDropdown).selectOption('hilo');
    await this.page.waitForTimeout(500);

    // Get all price texts like "$49.99"
    const pricesText = await this.page.locator(InventoryLocators.inventoryItemPrice).allTextContents();
    console.log("Prices on page:", pricesText);
    // Convert to numbers e.g. 49.99
    const prices = pricesText.map(price => parseFloat(price.replace('$', '')));
    console.log("Prices on page:", prices);
    // Check if array is sorted descending
    for (let i = 0; i < prices.length - 1; i++) {
      expect(prices[i]).toBeGreaterThanOrEqual(prices[i + 1]);
    }
  }
  async validateSortZtoA() {
  await this.page.locator(InventoryLocators.sortDropdown).selectOption('za');

  await SortUtils.validateTextSort(
    this.page,
    InventoryLocators.inventoryItemName,
    'desc'
  );
}

async validateSortHighToLow() {
  await this.page.locator(InventoryLocators.sortDropdown).selectOption('hilo');

  await SortUtils.validateNumberSort(
    this.page,
    InventoryLocators.inventoryItemPrice,
    'desc'
  );
}
}
