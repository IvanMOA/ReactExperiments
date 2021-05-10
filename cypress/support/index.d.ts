declare namespace Cypress {
  interface Chainable<Subject> {
    signin(): void;
    signup(): void;
  }
}
