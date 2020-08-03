describe("user can play RPS", () => {
    it("user can see the options to choose", () => {
      cy.visit("http://localhost:3001")
      cy.contains("Rock Paper Scissors")
      cy.get('button#restart').contains('Restart Game').click()
    })
})