import { Page, Locator } from '@playwright/test';

export class InventoryPage {
  readonly page: Page;
  readonly addToCartButton: Locator;
  readonly cartIcon: Locator;
  readonly burgerMenu: Locator;
  readonly logoutLink: Locator;

  constructor(page: Page) {
    this.page = page;
    // Seleciona o botão de "Add to cart" do primeiro item da lista
    this.addToCartButton = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
    this.cartIcon = page.locator('.shopping_cart_link');
    // Seletores para o menu lateral de Logout
    this.burgerMenu = page.locator('#react-burger-menu-btn');
    this.logoutLink = page.locator('#logout_sidebar_link');
  }

  async addItemToCart() {
    await this.addToCartButton.click();
  }

  async logout() {
    await this.burgerMenu.click();
    await this.logoutLink.click();
  }
}