class IframeApp {
  private iframeSel:string = '#mce_0_ifr'
 
    getIframeApp(){
        cy.frameLoaded(this.iframeSel)
        cy.iframe(this.iframeSel).then(iframeApp => {
            cy.wrap(iframeApp).type('{selectAll}{del}').type('Hello World!')
            cy.wrap(iframeApp).clear().type('Hello Cypress!')
            cy.wrap(iframeApp).should('have.text', 'Hello Cypress!')
        })
        
    }

    visit() {
        cy.visit(`${Cypress.env('herokuapp')}/tinymce`)
    }
 }

 export const IframeAppPage = new IframeApp()