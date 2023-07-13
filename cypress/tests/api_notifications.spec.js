describe('API Testing', () => {
    beforeEach(() => {
        cy.requestApi('Tavares_Barrows', 's3cret');
    });

    it ('Obtener el segundo elemento', () => {
        cy.request("GET", 'http://localhost:3001/notifications')
        .then(response => {
            expect(response.status).to.eq(200);
            expect(response.body.results[1].userFullName).to.equal('Edgar Johns');
        });
    });
});
