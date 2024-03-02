import {IframePage} from '../../pages/Iframe'
import {IframeAppPage} from '../../pages/IframeApp'

describe('IFRAME', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env('demoQa')}/nestedframes`)
    })
    
    it('Iframe', () => {
        IframePage.getIframe()
    });
});

describe('IFRAME APP', () => {
    beforeEach(() => {
        IframeAppPage.visit()
    })
    
    it('Iframe app with extension', () => {
        IframeAppPage.getIframeApp()

    });
});

describe.only('IFRAME WITH PLUGIN', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env('herokuapp')}/iframe`)
    })
    it('Test iframe', () => {
        cy.frameLoaded('#mce_0_ifr')
        cy.iframe('#mce_0_ifr').then((iframe)=> {
            cy.wrap(iframe).type('{selectAll}{del}').type('Hello World')
            cy.wrap(iframe).should('have.text', 'Hello World')
            cy.wrap(iframe).clear().type('Cypress')
            cy.then(() => {
                expect(iframe.text()).to.equal('Cypress')
            })
           
        })
    });
});