/// <reference types = "cypress"/>

describe('LangingAboutus', () =>{
  it('Iniciando experimento', () =>{
    cy.visit('http://localhost:3000')
    cy.url().should('eq', 'http://localhost:3000/')
  });
});


