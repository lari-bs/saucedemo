import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { URL, USER, INVALID_USER, PASSWORD, ITEMS, ITEM4, FIRST_NAME, LAST_NAME, POSTAL_CODE } from '../../support/constants';
import LoginPage from '../../models/login-page';
import InventoryPage from '../../models/inventory-page';
import CheckoutPage from '../../models/checkout-page';

const loginPage = new LoginPage();
const inventoryPage = new InventoryPage();
const checkoutPage = new CheckoutPage();

Given('que acesso a página inicial da loja virtual', () => {
  cy.visit(URL);
});

When('realizo login com as credenciais corretas', () => {
    loginPage.login(USER, PASSWORD);
  });
  
  When('realizo login com credenciais inválidas', () => {
    loginPage.login(INVALID_USER, PASSWORD);
  });
  
  Then('visualizo o título da página de inventário', () => {
    inventoryPage.getTitle().should('be.visible');
  });
  
  Then('visualizo a mensagem de erro {string} no login', (errorMessage) => {
    loginPage.assertErrorMessage(errorMessage);
  });
    
  When('acesso o carrinho de compras', () => {
    inventoryPage.getShoppingCartLink().click();
  });
  
  Then('vejo que existem {int} itens no carrinho', (expectedItemCount) => {
    inventoryPage.getCartItem().should('have.length', expectedItemCount);
  });
  
  When('removo um item do carrinho', () => {
    const itemToRemove = ITEM4;
    inventoryPage.getRemoveButton(itemToRemove).click();
  });
  
  When('finalizo a compra', () => {
    inventoryPage.goToCheckout().click();
    checkoutPage.getFirstNameField().type(FIRST_NAME);
    checkoutPage.getLastNameField().type(LAST_NAME);
    checkoutPage.getPostalCodeField().type(POSTAL_CODE);
    checkoutPage.getContinueButton().click();
    checkoutPage.getFinishButton().click();
  });
  
  When('adiciono {int} itens ao carrinho', (itemCount) => {
    for (let i = 0; i < itemCount; i++)  {
      inventoryPage.getAddToCartButton(ITEMS[i]).click();
      inventoryPage.verifyCartItemCount(i+1);
    }
  });
  
  When('finalizo o pedido', () => {
    checkoutPage.getContinueButton().click();
    checkoutPage.getFinishButton().click();
  });
    
  When('finalizo a compra sem preencher os campos obrigatórios', () => {
    inventoryPage.getShoppingCartLink().click();
    inventoryPage.goToCheckout().click();
    checkoutPage.getContinueButton().click();
  });

  When('tento avançar de tela', () => {
    checkoutPage.getContinueButton().click();
  });

  Then('visualizo a mensagem de erro {string} no checkout', (errorMessage) => {
    checkoutPage.assertErrorMessage(errorMessage);
  });
  
  When('preencho o campo {string}', (fieldName) => {
    switch (fieldName) {
      case 'First Name':
        checkoutPage.getFirstNameField().type(FIRST_NAME);
        break;
      case 'Last Name':
        checkoutPage.getLastNameField().type(LAST_NAME);
        break;
      case 'Postal Code':
        checkoutPage.getPostalCodeField().type(POSTAL_CODE);
        break;
      default:
        throw new Error(`Campo desconhecido: ${fieldName}`);
    }
  });
  
  Then('visualizo a mensagem de sucesso {string}', (successMessage) => {
    checkoutPage.getSuccessMessage().should('contain.text', successMessage);
  });