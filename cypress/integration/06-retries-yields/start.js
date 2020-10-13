/// <reference types="cypress" />

beforeEach( () => {

  cy
    .visit('localhost:3000');

});

it('Should have todo item with text "create a list of todos"', () => {

  cy.get('.new-todo')
    .type('create a list of todos{enter}');

  cy.get('.todo')
    .should('be.visible')
    .contains('todos');
});

it('Should have todo item with text "buy milk"', () => {

  cy
    .get('.todo-list')
    .find('li')
    .eq(1)
    .contains('buy milk');
});

it.only('Should have one todo item', () => {

  cy
    .get('.todo', {timeout: 30000})
    .should('have.length', 1);
  
});