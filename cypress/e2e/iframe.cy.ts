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