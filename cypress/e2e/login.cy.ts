import{LoginPage} from '../../pages/Login'

describe('LOGIN PAGE', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env('demoQa')}/login`)
    })
    
    it('Login with pageObject', () => {
        LoginPage.submitButtonLogin()

        cy.contains('Log out')
    });
});

