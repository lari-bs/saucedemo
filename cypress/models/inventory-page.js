export default class InventoryPage {
  getTitle = () => cy.get('#header_container > div.header_secondary_container > span')
  getShoppingCartIcon = () => cy.get('#shopping_cart_container > a > span');
  getAddToCartButton = (itemId) => cy.get(`#add-to-cart-${itemId}`);
  getCartItem = () => cy.get('#cart_contents_container > div > div.cart_list > div.cart_item');
  getRemoveButton = (itemId) => cy.get(`#remove-${itemId}`);
  getShoppingCartLink = () => cy.get('#shopping_cart_container > a');
  goToCheckout = () => cy.get('#checkout');

  verifyCartItemCount = (count) => {
    this.getShoppingCartIcon().should('have.text', count.toString());
  }
}
