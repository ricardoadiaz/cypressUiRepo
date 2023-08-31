describe('testing websites', () => {
    beforeEach(() => {
        cy.visit('https://www.cypress.io/')

    })
    it ('should find Text', () => {
        cy.title().should('include', 'Test')
        cy.get('.nav-bar > .relative > :nth-child(3)').click()
        //cy.get('#What-youll-learn').click()  
    })

})