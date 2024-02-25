describe('LOGIN PAGE', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env('demoQa')}/login`)
    })
    
    it('Login', () => {
        // cy.get('#userName').type('test');
        // cy.get('#password').type('Test1234*');
        // cy.contains('button', 'Login').click()  
        cy.login('test', 'Test1234*')
        cy.contains('Log out')
        
    });
});