/// <reference path="../support/commands.d.ts" />

it('successfully logs in', () => {
  cy.intercept('GET', '**/notes').as('getNotes')

  cy.login(
    Cypress.env('CYPRESS_USER_EMAIL'),
    Cypress.env('CYPRESS_USER_PASSWORD'),
    { cacheSession: false }
  )

  cy.wait('@getNotes')
})