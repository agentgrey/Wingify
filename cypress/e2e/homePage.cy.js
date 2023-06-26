describe("Home Page", () => {
  before(() => {
    cy.visit("https://agentgrey.github.io/Wingify/");
    cy.get("#username").type("username");
    cy.get("#password").type("password");
    cy.get("#log-in").click();
    cy.url().should("include", "https://agentgrey.github.io/Wingify/home.html");
  });

  it("should sort values when table header is clicked", () => {
    cy.get("#status").click();
    cy.wait(3000);
    cy.get("#status").click();
    cy.wait(7000);
    cy.get("#date").click();
    cy.wait(3000);
    cy.get("#date").click();
    cy.wait(7000);
    cy.get("#description").click();
    cy.wait(3000);
    cy.get("#description").click();
    cy.wait(7000);
    cy.get("#category").click();
    cy.wait(3000);
    cy.get("#category").click();
    cy.wait(7000);
    cy.get("#amount").click();
    cy.wait(3000);
    cy.get("#amount").click();
  });
});
