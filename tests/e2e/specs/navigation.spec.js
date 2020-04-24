/// <reference types="Cypress" />

describe('App navigation', () => {
  context('from the main page', () => {
    beforeEach(() => {
      cy.visit('/')
    })

    it('navigates to game page on clicking START button', () => {
      cy.get('button')
        .contains('START')
        .click()
      cy.url().should('include', '/game')
    })

    it('navigates to the how to play page on clicking HOW TO PLAY button', () => {
      cy.contains('button', 'HOW TO PLAY').click()
      cy.url().should('include', '/howtoplay')
    })

    it('navigates to about page on clicking ABOUT button', () => {
      cy.get('button')
        .contains('ABOUT')
        .click()
      cy.url().should('include', '/about')
    })
  })
})
