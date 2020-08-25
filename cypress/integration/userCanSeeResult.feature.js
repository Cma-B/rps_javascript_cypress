describe("user can see the result", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3001", {
    })
  })

  it("displays the game result if user choose Rock", () => {
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
})