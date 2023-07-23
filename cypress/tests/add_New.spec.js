import { logger } from "../utils/consts";

describe('Real World App', () => {

    beforeEach(() => {
        cy.login(logger.username, logger.password);
        cy.visit('/');
    })
    context('Veamos', () => {
        it('Trying to Sign in', () => {       

            // Check Page Elements
            cy.get('[data-test="sidenav"]').as('navegador').should('be.visible');
            cy.get('[data-test="sidenav-toggle"]').as('burgerMenu').should('exist');
            cy.get('[data-test="transaction-list"]').as('contenido').should('exist');
            
        });

        it('Adding new', () => {
            // Adding new
            cy.get('[data-test="nav-top-new-transaction"]').click();

            // Check list
            cy.get('[data-test="users-list"]').as('list').should('be.visible');
            cy.get('[data-test="user-list-search-input"]').as('search').should('exist');
      
            // Searching
            cy.get('@search').type('Devon Becker');  
            cy.get('@list').children().first().click();

            cy.get('[data-test="transaction-create-amount-input"]').type('999');
            cy.get('[data-test="transaction-create-description-input"]').type('Esta es una prueba');
            cy.get('[data-test="transaction-create-submit-request"]').click();

        })
    });
});