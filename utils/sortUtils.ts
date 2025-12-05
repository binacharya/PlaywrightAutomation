import { expect, Page } from "@playwright/test";

export class SortUtils {

  // TEXT SORTING A → Z or Z → A
  static async validateTextSort(
    page: Page,
    locator: string,
    order: 'asc' | 'desc' = 'asc'
  ) {
    const items = await page.locator(locator).allTextContents();

    const sorted = [...items].sort((a, b) =>
      order === 'asc' ? a.localeCompare(b) : b.localeCompare(a)
    );

    expect(items).toEqual(sorted);
  }

  // NUMBER SORTING (Prices, quantities, etc.)
  static async validateNumberSort(
    page: Page,
    locator: string,
    order: 'asc' | 'desc' = 'asc'
  ) {
    const items = await page.locator(locator).allTextContents();

    const nums = items.map((x) =>
      parseFloat(x.replace(/[^0-9.]/g, ""))
    );

    const sorted = [...nums].sort((a, b) =>
      order === 'asc' ? a - b : b - a
    );

    expect(nums).toEqual(sorted);
  }

  // DATE SORTING (supports multiple formats)
  static async validateDateSort(
    page: Page,
    locator: string,
    order: 'asc' | 'desc' = 'asc'
  ) {
    const items = await page.locator(locator).allTextContents();

    // Convert each date string → Date object
    const dates = items.map(text => new Date(text));

    // Validate parsing
    dates.forEach((d, idx) => {
      if (isNaN(d.getTime())) {
        throw new Error(`❌ Invalid date format at index ${idx}: "${items[idx]}"`);
      }
    });

    const sorted = [...dates].sort((a, b) =>
      order === 'asc' ? a.getTime() - b.getTime() : b.getTime() - a.getTime()
    );

    expect(dates).toEqual(sorted);
  }
}
