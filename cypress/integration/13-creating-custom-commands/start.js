/// <reference types="cypress" />

beforeEach(() => {
  
  cy
    .request('DELETE', 'localhost:3000/todos');

  cy
    .visit('localhost:3000');

});

it('creates 4 todos', () => {
  cy.addTodo('buy milk');
  cy.addTodo('wash dishes');
  cy.addTodo('clean windows');
  cy.addTodo('make bed');
});