describe("user can play RPS", () => {
  it("user can see the options to choose", () => {
    cy.visit("http://localhost:3001")
    cy.contains("Let's Play Rock Paper Scissors")
    cy.get("p#player").contains("Player: 0")
    cy.get("p#computer").contains("Computer: 0")
    cy.contains("Make Your Selection")
    cy.get('i#rock').should('be.visible').click()
    cy.get('i#paper').should('be.visible').click()
    cy.get('i#scissors').should('be.visible').click()
  })

  it("display the game result if user choose Rock", () => {
    cy.get("i#rock").click()
    cy.get("#message").then(($message) => {
      if ($message.text().includes("You Win")) {
        cy.get("i#scissors").should("be.visible")
        cy.contains("Computer Chose Scissors")
      

      } else if ($message.text().includes("You Lose")) {
        cy.get("i#paper").should("be.visible")
        cy.contains("Computer Chose Paper")

      } else {
        cy.contains("It's A Draw")
        cy.get("i#rock").should("be.visible")
        cy.contains("Computer Chose Rock")
      }
    })
  })

  it("display the game result if user choose Paper", () => {
    cy.get("i#paper").click()
    cy.get("#message").then(($message) => {
      if ($message.text().includes("You Win")) {
        cy.get("i#rock").should("be.visible")
        cy.contains("Computer Chose Rock")
       
       
      } else if ($message.text().includes("You Lose")) {
        cy.get("i#scissors").should("be.visible")
        cy.contains("Computer Chose Scissors")
       
      } else {
        cy.contains("It's A Draw")
        cy.get("i#paper").should("be.visible")
        cy.contains("Computer Chose Paper")
      }
    })
  })

  it("display the game result if user choose Scissors", () => {
    cy.get("i#scissors").click()
    cy.get("#message").then(($message) => {
      if ($message.text().includes("You Win")) {
        cy.get("i#paper").should("be.visible")
        cy.contains("Computer Chose Paper")
     
      } else if ($message.text().includes("You Lose")) {
        cy.get("i#rock").should("be.visible")
        cy.contains("Computer Chose Rock")
        
      } else {
        cy.contains("It's A Draw")
        cy.get("i#scissors").should("be.visible")
        cy.contains("Computer Chose Scissors")
      }
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