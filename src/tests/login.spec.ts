import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('should login successfully with valid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);
  
  await loginPage.navigate();
  await loginPage.login('standard_user', 'secret_sauce');
  
  // Validation: Check if we are at the inventory page
  await expect(page).toHaveURL(/inventory.html/);
});