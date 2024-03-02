describe('EXCEL', () => {
    it('Reading excel', () => {
        cy.readingXlsx('cypress/fixtures/excelData.xlsx').then(data => {
            cy.log(data)
        })
    });

    it('Write data to json document', () => {
        cy.readingXlsx('cypress/fixtures/excelData.xlsx').then(data => {
            cy.log(data)
            let email = data[0].data[0][0]
            let password = data[0].data[0][1]
            cy.writeFile('cypress/fixtures/login.json', {
                email: email,
                password: password
            })
        })
    });

    it('Write data to json document and then use it log in', () => {
        cy.readingXlsx('cypress/fixtures/excelData.xlsx').then(data => {
            cy.log(data)
            let email = data[0].data[0][0]
            let password = data[0].data[0][1]
            cy.writeFile('cypress/fixtures/login.json', {
                email: Cypress.env('email'),
                password: Cypress.env('password')
            })
            cy.fixture('login.json').then(login => {
                cy.log(login);
                cy.apiLogin(login.email, login.password)
                
            })
        })
    });
});