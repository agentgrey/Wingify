describe("Login Page", () => {
  it("should login with valid username and password", () => {
    cy.visit("https://agentgrey.github.io/Wingify/");
    cy.get("#username").type("username");
    cy.get("#password").type("password");
    cy.get("#log-in").click();
    // Add assertions to verify successful login
  });
});
