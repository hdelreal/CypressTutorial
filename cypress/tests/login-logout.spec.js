import { logger } from "../utils/consts";

describe('Real World App', () => {

    beforeEach(() => {
        cy.login(logger.username, logger.password);
        cy.visit('/');
    });

    context('Login', () => {
    it('Trying to Sign in', () => {

        // Check Page Elements
        cy.get('[data-test="sidenav"]').as('navegador').should('be.visible');
        cy.get('[data-test="sidenav-toggle"]').as('burgerMenu').should('exist');
        cy.get('[data-test="transaction-list"]').as('contenido').should('exist');
        // Closing Menu

        cy.get('@burgerMenu').click();
        // Check Menu is not present
        cy.get('@navegador').should('exist');
        cy.wait(5000);
    })
});
    context('Mine tab', () => {
        it('Navegar a tab Mine', () => {
            // cy.visit('/');
            cy.get('[data-test="nav-personal-tab"]').click();
            cy.get('[data-test="transaction-list"]').should('exist');
        })
    });

    context('Log out', () => {
        it('Des-loggearse', () => {
            cy.get('[data-test="sidenav-signout"]').click();
        })
    })
});