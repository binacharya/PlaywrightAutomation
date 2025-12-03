// tests/auth.setup.ts
import { chromium } from '@playwright/test';
import path from 'path';

const authFile = path.join(__dirname, '../.auth/user.json');

async function globalSetup() {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://www.saucedemo.com/');

  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  await page.waitForURL('**/inventory.html');

  // Save storage state (cookies, localStorage)
  await context.storageState({ path: authFile });

  await browser.close();
}

export default globalSetup;
