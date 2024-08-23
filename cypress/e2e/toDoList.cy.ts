describe('TO-DO LIST VALIDATION', () => {
   beforeEach(() => {
    cy.visit(`${Cypress.env('webdriverUnivers')}/To-Do-List/index.html`)
   })
    it('Check if entered vale is visible in', () => {
    cy.get('[class="fa fa-trash"]').should('have.length', 3)    
    cy.get('[placeholder="Add new todo"]').type('Hello{enter}')
    cy.get('[class="fa fa-trash"]').should('have.length', 4)
    cy.get('[class="fa fa-trash"]').parent().parent().contains('Hello') 
    })
})