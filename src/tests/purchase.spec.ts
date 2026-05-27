import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';

test('should add a product to the cart', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);

  await loginPage.navigate();
  await loginPage.performLogin('standard_user', 'secret_sauce');
  
  await inventoryPage.addItemToCart();
  
  // Verifica se o contador do carrinho mudou para 1
  await expect(inventoryPage.cartIcon).toHaveText('1');
});