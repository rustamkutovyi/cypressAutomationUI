class Alert{
   private alertTextButton:string = 'Click for JS Alert'
   private buttonSelector:string = 'button'
   private alerJsText:string = 'I am a JS Alert'
   private alerJsConfirmText:string = 'I am a JS Confirm'
   private resultSelector:string = '#result'
   private resultJSAlertText:string = 'You successfully clicked an alert'
   private jsConfirmTex:string = 'Click for JS Confirm'
   private jsConf:string = 'You clicked: Ok'
   private jsPromt:string = 'Click for JS Prompt'
   private jsConfFalseText = 'You clicked: Cancel'
  
    jsAlert(){
    cy.contains(this.buttonSelector, this.alertTextButton).click()
    cy.on('window:alert', (text) => {
        expect(text).to.equal(this.alerJsText)
    })
    cy.on('window:confirm', () => true)
    cy.get(this.resultSelector).should('have.text', this.resultJSAlertText)
 }
 jsConfimTrue(){
    cy.contains(this.buttonSelector, this.jsConfirmTex).click()
    cy.on('window:alert', (textAlert) => {
        expect(textAlert).to.equal(this.alerJsConfirmText)
    })
    cy.on('window:confirm', () => true)
    cy.get('#result').should('have.text',this.jsConf)
 }

 jsConfirmFalse(){
    cy.contains(this.buttonSelector, this.jsConfirmTex).click()
    cy.on('window:alert', (text) => {
        expect(text).to.eq(this.alerJsConfirmText)
    })
    cy.on('window:confirm', () => false)
    cy.get('#result').should('have.text', this.jsConfFalseText)
 }

 isPromptTrue(){
    const text = 'Hello World'
    cy.window().then(window => {
        cy.stub(window,'prompt').returns(text)
        cy.contains(this.buttonSelector, this.jsPromt).click()
    })
    cy.on('window:confirm', () => true)
    cy.get('#result').should('have.text', `You entered: ${text}`)
 }

 isPromptFalse(){
    cy.window().then(window => {
        cy.stub(window, 'prompt').returns(null)
        cy.contains(this.buttonSelector, this.jsPromt).click()
    })
    cy.on('window:confirm', () => false)
    cy.get('#result').should('have.text','You entered: null')
 }
}

export const AlertPage = new Alert()