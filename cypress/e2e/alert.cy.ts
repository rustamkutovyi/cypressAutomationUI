import {AlertPage} from '../../pages/Alert'

describe('ALERT', () => {
        beforeEach(() => {
        cy.visit(`${Cypress.env('herokuapp')}/javascript_alerts`)
    })
    it('Click for JS alert', () => {
        AlertPage.jsAlert()
    });
    it('Click for JS confirm True', () => {
        AlertPage.jsConfimTrue()
    });
    it('Click for JS confirm False', () => {
        AlertPage.jsConfirmFalse()
    });
    it('Click for JS confirm Promt/true', () => {
        AlertPage.isPromptTrue()
    });
    it('Click for JS confirm Promt/false', () => {
        AlertPage.isPromptFalse()
    });
});