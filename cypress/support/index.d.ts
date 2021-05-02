declare namespace Cypress {
  interface Chainable<Subject> {
    signin(): Chainable<Element>;
  }
}
