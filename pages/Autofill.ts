class Autofill {
private inpuField:string = '.auto-complete__value-container'
private dropDown: string = '#react-select-2-option-0'
private result:string = '.auto-complete__multi-value__label'

autoComplete(){
    const obj = {
        Y: 'Yellow'
    }
    cy.get(this.inpuField).first().type(Object.keys(obj)[0])
    cy.contains(this.dropDown, Object.values(obj)[0]).click()
    cy.get(this.result).should('have.text', Object.values(obj)[0])
    
}

}

export const autoFill = new Autofill()