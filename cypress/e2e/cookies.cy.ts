import{LoginPage} from '../../pages/Login'
// Cypress.session.clearAllSavedSessions

describe('COOKIES', () => {
    beforeEach(() => {
        cy.session('myCurrentSession', () => {
            cy.visit(`${Cypress.env('demoQa')}/login`)
            LoginPage.submitButtonLogin()
            // cy.get('#userName').type('test');
            // cy.get('#password').type('Test1234*');
            // cy.get('#login').click();
            cy.contains('Log out')
        })
    })

    it('Create cookies with cy.session', () => {
        cy.visit(`${Cypress.env('demoQa')}/login`)
        cy.url().then((url) => {
            cy.log(url)
        })
    });
    it('Create cookies with cy.session', () => {
        cy.visit(`${Cypress.env('demoQa')}/login`)
        cy.contains('Log out')
    });
});