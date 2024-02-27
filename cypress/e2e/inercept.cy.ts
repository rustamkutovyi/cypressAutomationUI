import {pasvLogin} from '../../pages/PasvLogin'
describe('INTERCEPT', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env('stage')}/user/login`)
        pasvLogin.login()
    })
    
    it('Intercept for Login', function(){
        cy.intercept('POST', '*/login').as('login')
     
        cy.wait('@login').then(res => {
            console.log(res, 'response');
            let id = res.response.body.payload.user._id
            cy.location().should(loc => {
                console.log(loc, 'location');
                expect(loc.href).to.eq(`https://stage.pasv.us/profile/${id}`)
                expect(res.response.statusCode).to.eq(200)
            })
        })
    });

    it('Intercept for Progress', function() {
        cy.fixture('progress.json').as('data')
        cy.intercept('https://server-stage.pasv.us/course/coursesProgress/65d80a21d34bb09828b7df5e', 
        {fixture: 'progress.json'}
        ).as('course')
        cy.visit('https://stage.pasv.us/profile/65d80a21d34bb09828b7df5e/progress')
        cy.wait('@course').then(el=> {
            console.log(el, 'progressResponse');
            
            cy.wrap(this.data).should('deep.equal', el.response.body)
        })
    });    

    it('Response for katas', function() {
        cy.fixture('katas.json').as('resBody')
        
        cy.intercept('https://server-stage.pasv.us/progress/codewars/completed/65d80a21d34bb09828b7df5e',
        {fixture: 'katas.json'}
        ).as('katas')
        
        cy.visit('https://stage.pasv.us/profile/65d80a21d34bb09828b7df5e/katas')
        cy.wait('@katas').then(res => {
          console.log(res, 'katasResponse');

          cy.wrap(this.resBody).should('deep.equal', res.response.body)
        })
    });
});
