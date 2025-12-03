import { Page, expect } from '@playwright/test';

export class LoginPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  async validateLoginFormVisible() {
    await expect(this.page.locator('#user-name')).toBeVisible();
    await expect(this.page.locator('#password')).toBeVisible();
    await expect(this.page.locator('#login-button')).toBeVisible();
  }

  async login(username: string, password: string) {
    await this.page.fill('#user-name', username);
    await this.page.fill('#password', password);
    await this.page.click('#login-button');

  }

  async validateErrorMessage(expectedText: string) {
    const errorLocator = this.page.locator('h3[data-test="error"]'); // SauceDemo error selector
    await expect(errorLocator).toBeVisible();
  }
}
