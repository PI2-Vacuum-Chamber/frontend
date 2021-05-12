/// <reference types = "cypress"/>

describe('Form experiment', () =>{
  it('Iniciando experimento', () =>{
    cy.visit('http://localhost:3000')

    cy.get('button[name=NextTest]').click()

    cy.get('input[name=TempMax]').type(1);
    cy.get('input[name=DurMax]').type(1);
    cy.get('input[name=TempMin]').type(1);
    cy.get('input[name=DurMin]').type(1);
    cy.get('input[name=QtnHot]').type(1);
    cy.get('input[name=QtnCoud]').type(1);
    
    cy.get('button[name=StartTest]').click()

    cy.contains('Teste em andamento');
    cy.url().should('eq', 'http://localhost:3000/experiment')
  });
});


