describe('PLAYGROUND PRACTICE', () => {
    beforeEach(() => {
        cy.visit(Cypress.env('playground', ))
    })
    
    it('Wait for alert to be present, show alert', () => {
        
        cy.get('#alert_trigger').should('be.visible').and('exist').click()
        cy.get('#alert_handled_badge').should('be.visible').and('exist')
        cy.contains('span', 'Alert handled')
    });

    it('Wait for alert to be present, show promot', () => {

        cy.get('#prompt_trigger').click()
        cy.get('#confirm_ok_badge').then(element => {
            expect(element).to.have.text('OK')
        })
    });

    it('Wait for element to be visible', () => {
        cy.get('#visibility_trigger').should('be.visible').and('have.text', 'Trigger').click()
        cy.get('#visibility_target').should('be.visible').click()
        cy.contains('I just removed my invisibility cloak!')
        // cy.get('#visibility_target').then(el => {
        //     expect(el).to.be.visible
        // })
    });

    it('Wait for element to be invisible', () => {
        cy.get('#invisibility_trigger').click()

        cy.get('#spinner_gone').should('have.text', 'Thank God that spinner is gone!')
        // cy.contains('#spinner_gone', 'Thank God that spinner is gone!')
    });

    it('Wait for element to be unabled and an attribure to contain certain text', () => {
        cy.get('#enabled_trigger').should('be.visible').and('exist').click()

        cy.get('#enabled_target').should('be.visible').and('have.text', 'Enabled Button').click()
        cy.get('.popover-body').should('have.text', 'See, you just clicked me!!')

    });

    it.only('New title', () => {
        cy.get('#page_title_trigger').click()
        cy.title().should('eq', 'My New Title!')
    });
});