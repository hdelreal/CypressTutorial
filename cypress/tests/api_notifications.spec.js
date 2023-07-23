import { logger } from "../utils/consts";

describe('API Testing', () => {
    beforeEach(() => {
        cy.requestApi(logger.username, logger.password);
    });

    it ('Obtener el segundo elemento', () => {
        cy.request("GET", 'http://localhost:3001/notifications')
        .then(response => {
            expect(response.status).to.eq(200);
            expect(response.body.results[1].userFullName).to.equal('Edgar Johns');
        });
    });
});
