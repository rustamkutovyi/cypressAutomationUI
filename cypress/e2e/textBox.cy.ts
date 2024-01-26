describe('textBox', () =>{
    it('test', () => {
        cy.visit('https://uitestingplayground.com/textinput')
        cy.get('#newButtonName').type('Hello World')
        cy.get('#updatingButton').click()

        cy.contains('#updatingButton', 'Hello World')
        cy.get('#updatingButton').should('have.text', 'Hello World')
        cy.get('#updatingButton').then(element => {
            expect(element.text()).to.eq('Hello World')
        })
        
    })
})