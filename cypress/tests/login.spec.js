describe('Real World App', () => {
    // Tavares_Barrows
    // s3cret

    beforeEach(() => {
        cy.login('Tavares_Barrows', 's3cret');
        cy.visit('/');
    })
    context('Veamos', () => {
    it('Trying to Sign in', () => {
        // cy.visit('/');
        

        // Check Page Elements
        cy.get('[data-test="sidenav"]').as('navegador').should('be.visible');
        cy.get('[data-test="sidenav-toggle"]').as('burgerMenu').should('exist');
        cy.get('[data-test="transaction-list"]').as('contenido').should('exist');
        // Closing Menu

        cy.get('@burgerMenu').click();
        // Check Menu is not present
        cy.get('@navegador').should('exist');
    })
});
    context('Otra vez', () => {
        it('Again', () => {
            // cy.visit('/');
            cy.get('[data-test="nav-personal-tab"]').click();
        })
    })
});