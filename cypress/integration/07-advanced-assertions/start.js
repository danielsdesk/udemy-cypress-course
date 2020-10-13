/// <reference types="cypress" />

beforeEach( () => {

  cy
    .visit('localhost:3000');

});

it.only('Checks text of todo item', () => {

  cy
    .get('.todo')
    .then(item => {
        expect(item).to.contain('buy milk');
    });
  
});

it.only('Checks texts of all todo items', () => {

  cy
    .get('.todo')
    .then( todos => {
        expect(todos[0]).to.contain.text('buy milk');
        expect(todos[1]).to.contain.text('wash dishes');
        expect(todos[2]).to.contain.text('create todos list');
    });
  
});

it.only('Has first todo item with text "buy milk"', () => {

  cy
    .get('.todo')
    .should('have.length', 3)
    .eq(0)
    .should('contain.text', 'buy milk');
});

it.only('Has first todo item with text "buy milk" (solution 2)', () => {

  cy
    .get('.todo')
    .should( todos => {
        expect(todos[0]).to.contain.text('buy milk');
    });
  
});