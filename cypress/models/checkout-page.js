export default class CheckoutPage {
  getFirstNameField = () => cy.get('#first-name');
  getLastNameField = () => cy.get('#last-name');
  getPostalCodeField = () => cy.get('#postal-code');
  getContinueButton = () => cy.get('#continue');
  getFinishButton = () => cy.get('#finish');
  getSuccessMessage = () => cy.get('#checkout_complete_container > h2');

  assertErrorMessage(message) {
    return cy.get('h3').should('be.visible').contains(message);
  }
}
