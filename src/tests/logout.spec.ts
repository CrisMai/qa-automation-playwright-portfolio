import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';

test('should logout successfully', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  
  await loginPage.navigate();
  await loginPage.performLogin('standard_user', 'secret_sauce');
  
  await inventoryPage.logout();
  
  // Verifica se voltou para a página de login
  await expect(page).toHaveURL('https://www.saucedemo.com/');
});