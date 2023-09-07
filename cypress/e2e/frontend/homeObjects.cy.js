describe("Pruebas sobre UI", () => {
  beforeEach(() => {
    cy.visit("http://the-internet.herokuapp.com/");
  });
  /*it("Ejemplo de click", () => {
        cy.contains("Add/Remove Elements").click()
        cy.get('button').click()
        cy.Contains('Delete').click()
    })
*/
  /*it("Ejemplo de checkboxes", () => {
    cy.contains("Checkboxes").click();
    cy.get("#checkboxes > :nth-child(1)").check();
    cy.get("#checkboxes > :nth-child(3)").uncheck();
  });
  */
  it("Elegir un dropdown", () => {
    cy.contains("Dropdown").click();
    cy.get('#dropdown').select(2);
  });
});
