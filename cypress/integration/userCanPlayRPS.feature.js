describe("user can play RPS", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3001", {
    })
  })

  it("user can see the options to choose", () => {
    cy.contains("Let's Play Rock Paper Scissors")
    cy.get("p#player").contains("Player: 0")
    cy.get("p#computer").contains("Computer: 0")
    cy.contains("Make Your Selection")
    cy.get('i#rock').should('be.visible').click()
    cy.get('i#paper').should('be.visible').click()
    cy.get('i#scissors').should('be.visible').click()
  })

  





})