class PasvLogin {
    private email:string = '#normal_login_email'
    private password:string = '#normal_login_password'
    private submitButton:string = 'button[type="submit"]'

    login(){
        cy.get(this.email).type(Cypress.env('email'))
        cy.get(this.password).type(Cypress.env('password'))
        cy.get(this.submitButton).click()
    }
}

export const pasvLogin = new PasvLogin ()