import {TextBoxPage} from '../../pages/TextBox'

describe('TEXT BOX', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env('textBox')}/text-box`)
    })
    
    it('Text box through POM', () => {
        TextBoxPage.submitTextBox()

        //  cy.get('#name').should('be.visible')
        cy.contains('div', 'Name')
    });
});
