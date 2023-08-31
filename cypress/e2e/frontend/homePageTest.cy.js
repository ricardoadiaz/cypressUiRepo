describe('testing websites', () => {
    beforeEach(() => {
        cy.visit('https://www.atlassian.com/software/jira')

    })
    it ('should find Text', () => {
        cy.title().should('include', 'Software')
        //cy.get('.nav-bar > .relative > :nth-child(3)').click()
        cy.xpath('//*[@id="jira"]/header/div/div[1]/div/div[2]/a[2]').click()
        
    })

})