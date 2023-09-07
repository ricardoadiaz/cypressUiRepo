describe("Page Navigation Test", () => {
    beforeEach(() => {
      cy.visit("http://the-internet.herokuapp.com/login");
    });
    it("login with valid credentials", () => {
      cy.xpath('//*[@id="username"]').type("tomsmith").pause();
      //cy.log('Write username');
      cy.xpath('//*[@id="password"]').pause().type("SuperSecretPassword!");
      cy.xpath('//*[@id="login"]/button/i').click();
      cy.xpath('//*[@id="flash"]')
        .should("be.visible")
        .and("contain", "You logged into a secure area!");
      cy.xpath('//*[@id="content"]/div/a/i').should("be.visible");
    });
  
    it("login Fail with invalid Credentials ", () => {
      cy.xpath('//*[@id="username"]').type("tomsmith");
      cy.xpath('//*[@id="password"]').type("SuperSecret%!");
      cy.xpath('//*[@id="login"]/button/i').click();
      cy.xpath('//*[@id="flash"]')
        .should("be.visible")
        .and("contain", "Your password is invalid!");
    });
  
    it("login Fail with empty password ", () => {
      cy.xpath('//*[@id="username"]').type("tomsmith");
      cy.xpath('//*[@id="login"]/button/i').click();
      cy.xpath('//*[@id="flash"]')
        .should("be.visible")
        .and("contain", "Your password is invalid!");
    });
  
    // Validation Messages
  
    it("should clear the welcomen message and show the logout message", () => {
      cy.xpath('//*[@id="username"]').type("tomsmith");
      cy.xpath('//*[@id="password"]').type("SuperSecretPassword!");
      cy.xpath('//*[@id="login"]/button/i').click();
      cy.xpath('//*[@id="flash"]')
        .should("be.visible")
        .and("contain", "You logged into a secure area!");
      cy.xpath('//*[@id="content"]/div/a/i').should("be.visible");
      cy.xpath('//*[@id="content"]/div/a/i').click();
      cy.xpath('//*[@id="flash"]')
        .should("be.visible")
        .and("contain", " You logged out of the secure area!");
  
    });
  });