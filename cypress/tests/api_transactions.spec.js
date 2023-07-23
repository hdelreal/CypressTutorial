import { logger } from "../utils/consts";

describe('API Testing', () => {
    beforeEach(() => {
        cy.requestApi(logger.username, logger.password);
    });

    it ('Obtener el segundo elemento', () => {
        cy.request("GET", 'http://localhost:3001/transactions')
        .then(response => {
            expect(response.status).to.eq(200);
            expect(response.body.results[0].description).to.equal('Esta es una prueba');
        });
    });
});
