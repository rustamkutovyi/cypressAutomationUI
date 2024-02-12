class Iframe {
   private iframe:string = '#frame1'
   private body:string = 'body'
   private childIframe:string = 'iframe'

   getIframe(){
     cy.get(this.iframe).then(iFrame => {
        const body = iFrame.contents().find(this.body)
        cy.wrap(body).should('have.text', 'Parent frame')
        cy.wrap(body)
        .find(this.childIframe)
        .then(ChildIframe => {
            const child = ChildIframe.contents().find(this.body)
            cy.wrap(child).should('have.text', 'Child Iframe')
        })
     })
   }
}

export const IframePage = new Iframe()