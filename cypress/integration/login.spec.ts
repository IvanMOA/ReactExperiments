/// <reference path="../support/index.d.ts" />

it("Just works", () => {
  cy.visit("http://localhost:8080");
  cy.signin();
});
