describe('LOGIN PAGE', () => {
    beforeEach(() => {
        cy.visit('click')
    })
    
    it.skip('Debug', () => {
    cy.get('#badButton').debug().click()
    });
    it('Pause', () => {
         cy.pause()
         cy.get('#badButton').click()
         cy.pause()
         cy.get('#badButton').should('have.css', 'backround-color', 'rgb(40, 167, 69)')
    });
});