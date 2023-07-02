
Cypress.Commands.add('login', (username, password) => {
    cy.session([username, password], () => {
        cy.visit('/');
        cy.get('[data-test="signin-username"]').type('Tavares_Barrows');
        cy.get('[data-test="signin-password"]').type('s3cret');
        cy.get('[data-test="signin-remember-me"]').click();
        cy.get('[data-test="signin-submit"]').click();

        cy.getCookies().should('be.empty');
    });
});