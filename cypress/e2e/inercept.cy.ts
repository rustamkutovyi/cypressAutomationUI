describe('INTERCEPT', () => {
    it('Network request spy', function(){
        cy.fixture('progress.json').as('data')
        cy.intercept('POST', '*/login').as('login')
        cy.intercept('https://server-stage.pasv.us/course/coursesProgress/65d80a21d34bb09828b7df5e',
         {fixture: 'progress.json'}
        ).as('course')

        cy.visit(`${Cypress.env('stage')}/user/login`)
        cy.get('#normal_login_email').type(Cypress.env('email'))
        cy.get('#normal_login_password').type(Cypress.env('password'), { log: false })
        cy.get('button[type="submit"]').click()
        cy.wait('@login').then(res => {
            console.log(res, 'res');
            let id = res.response.body.payload.user._id
            cy.location().should(loc => {
                console.log(loc, 'loc');
                expect(loc.href).to.eq(`https://stage.pasv.us/profile/${id}`)
                expect(res.response.statusCode).to.eq(200)
            })
        })
        cy.visit('https://stage.pasv.us/profile/65d80a21d34bb09828b7df5e/progress')
        cy.wait('@course').then(el=> {
            console.log(el, 'response');
            
            cy.wrap(this.data).should('deep.equal', el.response.body)
        })

    });
})