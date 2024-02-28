import { logger } from "../utils/consts";

describe('API Testing', () => {
    beforeEach(() => {
        cy.requestApi(logger.username, logger.password);
    });

    it.skip ('Obtener el segundo elemento', () => {
        cy.request("GET", 'http://localhost:3001/transactions')
        .then(response => {
            expect(response.status).to.eq(200);
            expect(response.body.results[0].description).to.equal('Esta es una prueba');
        });
    });

    it('Graphql test', () => {
        cy.request('POST', 'http://localhost:3001/graphql', {
            query: `query {
                listBankAccount {
                 id
                 uuid
                 userId
                 bankName
                 accountNumber
                 routingNumber
                 isDeleted
                 createdAt
                 modifiedAt
                }
            }`,
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.data.listBankAccount[0].accountNumber).to.equal("3859571950");
        });
    })
});
