describe('API Testing', () => {
    let todoItem;
    beforeEach(() => {
        cy.request("POST", 'http://localhost:3001/login', {
            username: 'Tavares_Barrows',
            password: 's3cret',
        }).then(response => {
            expect(response.status).to.eq(200);
        })
    })
    it ('Fetch all the items', () => {
        cy.request("GET", 'http://localhost:3001/transactions')
        .then(response => {
            todoItem = response.body.results[0];
            expect(response.status).to.eq(200);
            expect(response.body.results[0].id).to.equal('cphxkMyLm');
        });
    });
});
