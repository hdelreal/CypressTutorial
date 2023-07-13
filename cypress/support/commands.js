
Cypress.Commands.add('login', (username, password) => {
    cy.session([username, password], () => {
        cy.visit('/');
        cy.get('[data-test="signin-username"]').type(username);
        cy.get('[data-test="signin-password"]').type(password);
        cy.get('[data-test="signin-remember-me"]').click();
        cy.get('[data-test="signin-submit"]').click();
    });
});

Cypress.Commands.add('requestApi', (username, password) => {
    cy.request("POST", 'http://localhost:3001/login', {
        username: username,
        password: password,
    }).then(response => {
        expect(response.status).to.eq(200);
    })
})