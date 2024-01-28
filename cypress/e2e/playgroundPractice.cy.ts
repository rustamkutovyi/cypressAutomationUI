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
});