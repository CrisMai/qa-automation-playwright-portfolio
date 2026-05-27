import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('should login successfully with valid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);
  
  await loginPage.navigate();
  await loginPage.login('standard_user', 'secret_sauce');
  
  // Validation: Check if we are at the inventory page
  await expect(page).toHaveURL(/inventory.html/);
});

test('should show error message for invalid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);
  
  await loginPage.navigate();
  // Tentando logar com usuário inexistente
  await loginPage.login('invalid_user', 'wrong_password');
  
  // Verifica se a mensagem de erro aparece
  const errorMessage = page.locator('[data-test="error"]');
  await expect(errorMessage).toBeVisible();
  await expect(errorMessage).toContainText('Username and password do not match');
});