describe("user can see the score", () => {
  before(() => {
    cy.visit("http://localhost:3001", {
      onBeforeLoad: (game) => {
        cy.stub(game.Math, 'random').returns(1);
      }
    })
  })

  it("expect to show the result on scoreboard", () => {
    cy.get("i#rock").click()
    cy.get("#message").should("contain", "You Win")
    cy.get("i#rock").click()
    cy.get("#message").should("contain", "You Win")
    cy.get("i#paper").click()
    cy.get("#message").should("contain", "You Lose")
    cy.contains("Player: 2").should("be.visible")
    cy.contains("Computer: 1").should("be.visible")
  })
})