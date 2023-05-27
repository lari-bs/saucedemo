export default class LoginPage {
  getUsernameField = () => cy.get('#user-name');
  getPasswordField = () => cy.get('#password');
  getLoginButton = () => cy.get('#login-button');

  login = (username, password) => {
    this.getUsernameField().type(username);
    this.getPasswordField().type(password);
    this.getLoginButton().click();
  }

  assertErrorMessage(message) {
    return cy.get('[data-test="error"]').should('be.visible').contains(message);
  }

}
