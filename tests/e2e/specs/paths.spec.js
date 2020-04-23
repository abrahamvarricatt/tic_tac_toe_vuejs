/// <reference types="Cypress" />

describe('URL routes', () => {
  it('Should open page with title `Tic Tac Toe` when navigating to / ', () => {
    cy.visit('/')
    cy.get('.title').contains('Tic Tac Toe')
  })

  it('Should open page with title `Game Page` when navigating to /#/game ', () => {
    cy.visit('/#/game')
    cy.get('.title').contains('Game Page')
  })

  it('Should open page with title `How to Play` when navigating to /#/howtoplay ', () => {
    cy.visit('/#/howtoplay')
    cy.get('.title').contains('How to Play')
  })

  it('Should open page with title `About` when navigating to /#/about ', () => {
    cy.visit('/#/about')
    cy.get('.title').contains('About')
  })
})
