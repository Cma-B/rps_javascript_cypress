describe("user can play RPS", () => {
    it("user can see the options to choose", () => {
      cy.visit("http://localhost:3001")
      cy.contains("Let's Play Rock Paper Scissors")
      cy.get("p#score-1").contains("Player: 0")
      cy.get("p#score-2").contains("Computer: 0")
      cy.contains("Make Your Selection")
      cy.get('i#rock').should('be.visible').click()
      cy.get('i#paper').should('be.visible').click()
      cy.get('i#scissors').should('be.visible').click()
    })

   //it(" displays restart button after first click on each icon", () => {
     //cy.get("#choices").click()
     //cy.get("button#restart").contains("Restart Game")
     //cy.get("p#score-1").contains("Player: 0")
    // cy.get("p#score-2").contains("Computer: 0")
   // })

})