/// <reference types="Cypress" />

describe('Web application layout', () => {
  context('overview', () => {
    it('should show correct title', () => {
      cy.visit('/')
      cy.title().should('eq', 'Tic Tac Toe')
    })
    it('should fit all content within 350px', () => {
      cy.visit('/')
      cy.get('.app-foreground')
        .invoke('outerWidth')
        .should('be.eq', 350)
    })
  })
})
