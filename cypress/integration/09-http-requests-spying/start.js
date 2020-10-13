/// <reference types="cypress" />

beforeEach( () => {
    cy.server();
    cy.route('GET', '/todos').as('todosList');
    cy.route('POST', '/todos').as('todosCreate');

  cy
    .visit('localhost:3000');

});

it('has no elements', () => {
    cy.wait('@todosList');

  cy
    .get('.todo')
    .should('have.length', 0);
  
});

it.only('adds an item to the list', () => {
    cy.get('.new-todo')
    .type('wash dishes{enter}');

    cy.wait('@todosCreate')
    .then( todoItem => {
        expect(todoItem.status).to.eq(201);
        expect(todoItem.response.body.title).to.eq('wash dishes');
        expect(todoItem.response.body.completed).to.be.false;
    })

});