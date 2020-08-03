describe("user can play RPS", () => {
    it("user can see the options to choose", () => {
      cy.visit("http://localhost:3001")
      cy.contains("Rock Paper Scissors")
      cy.get('button#restart').contains('Restart Game').click()
      cy.get("p#score-1").contains("Player: 0")
      cy.get("p#score-2").contains("Computer: 0")
      cy.contains("Make Your Selection")
    })
})