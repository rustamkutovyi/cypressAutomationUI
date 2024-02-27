import {pasvLogin} from '../../pages/PasvLogin'
describe('INTERCEPT', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env('stage')}/user/login`)
        pasvLogin.login()
    })
    
    it('Intercept for Login', function(){
        // cy.fixture('progress.json').as('data')
        // cy.fixture('katas.json').as('resBody')
        cy.intercept('POST', '*/login').as('login')
        // cy.intercept('https://server-stage.pasv.us/course/coursesProgress/65d80a21d34bb09828b7df5e',
        //  {fixture: 'progress.json'}
        // ).as('course')
        // cy.intercept('https://server-stage.pasv.us/progress/codewars/completed/65d80a21d34bb09828b7df5e',
        // {fixture: 'katas.json'}
        // ).as('katas')

        // cy.visit(`${Cypress.env('stage')}/user/login`)
        // cy.get('#normal_login_email').type(Cypress.env('email'))
        // cy.get('#normal_login_password').type(Cypress.env('password'), { log: false })
        // cy.get('button[type="submit"]').click()
        cy.wait('@login').then(res => {
            console.log(res, 'response');
            let id = res.response.body.payload.user._id
            cy.location().should(loc => {
                console.log(loc, 'location');
                expect(loc.href).to.eq(`https://stage.pasv.us/profile/${id}`)
                expect(res.response.statusCode).to.eq(200)
            })
        })
        // cy.visit('https://stage.pasv.us/profile/65d80a21d34bb09828b7df5e/progress')
        // cy.wait('@course').then(el=> {
        //     console.log(el, 'response');
            
        //     cy.wrap(this.data).should('deep.equal', el.response.body)
        // })

        // cy.visit('https://stage.pasv.us/profile/65d80a21d34bb09828b7df5e/katas')
        // cy.wait('@katas').then(res => {
        //   console.log(res, 'katasResponse');

        //   cy.wrap(this.resBody).should('deep.equal', res.response.body)
        // })
    });

    it('Intercept for Progress', function() {
        cy.fixture('progress.json').as('data')
        cy.intercept('https://server-stage.pasv.us/course/coursesProgress/65d80a21d34bb09828b7df5e', 
        {fixture: 'progress.json'}
        ).as('course')
        cy.visit('https://stage.pasv.us/profile/65d80a21d34bb09828b7df5e/progress')
        cy.wait('@course').then(el=> {
            console.log(el, 'response');
            
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
