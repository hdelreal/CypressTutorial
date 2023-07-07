describe('Real World App', () => {
    // Tavares_Barrows
    // s3cret

    beforeEach(() => {
        cy.login('Tavares_Barrows', 's3cret');
        cy.visit('/');
    })
    context('Veamos', () => {
        it('Trying to Sign in', () => {        

            // Check Page Elements
            cy.get('[data-test="sidenav"]').as('navegador').should('be.visible');
            cy.get('[data-test="sidenav-toggle"]').as('burgerMenu').should('exist');
            cy.get('[data-test="transaction-list"]').as('contenido').should('exist');
            // Adding new
            
        
    });
});
});