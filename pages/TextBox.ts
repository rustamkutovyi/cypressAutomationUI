class TextBox {
userName:string =  '#userName';
userEmail:string = '#userEmail';
currentAddress:string = '#currentAddress';
permanentAddress:string = '#permanentAddress';
submitButton:string = '#submit';

submitTextBox(){
    cy.get(this.userName).type('First Name')
    cy.get(this.userEmail).type('andrew@example.com')
    cy.get(this.currentAddress).type('Current address')
    cy.get(this.permanentAddress).type('New Address')
    cy.get(this.submitButton).click()
 }
}

export const TextBoxPage = new TextBox()