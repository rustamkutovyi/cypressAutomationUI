import { autoFill } from '../../pages/Autofill'

beforeEach(() => {
    cy.visit(`${Cypress.env('demoQa')}/auto-complete`, { timeout: 5000 })
})
beforeEach(() => {
    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false })
})
describe('AUTOFILL', () => {
    it('Verify that autofill is working', () => {
        autoFill.autoComplete()
    });
});