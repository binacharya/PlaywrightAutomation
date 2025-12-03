import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.describe('Login Page validations', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.goto();
  });

  test('Login form elements are visible', async () => {
    await loginPage.validateLoginFormVisible();
  });

  test('Shows error on invalid login', async () => {
    await loginPage.login('wrong_user', 'wrong_pass');

    await loginPage.validateErrorMessage('Epic sadface: Username and password do not match any user in this service');
  });
});
