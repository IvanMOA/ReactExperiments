Cypress.Commands.add("signin", () => {
  cy.visit("http://localhost:8080");
  cy.get('[data-testid="email_input"]');
});
