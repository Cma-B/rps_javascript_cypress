describe("user can see restart button", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3001", {
    })
  })

  it("display the restart button", () => {
    cy.get("#choices").click()
    cy.get('button#restart').contains('Restart Game').click()
    cy.get("#computer").should("contain", "Computer: 0")
    cy.get("#player").should("contain", "Player: 0")
    cy.get("#message").should('not.be.visible')
  })
})  