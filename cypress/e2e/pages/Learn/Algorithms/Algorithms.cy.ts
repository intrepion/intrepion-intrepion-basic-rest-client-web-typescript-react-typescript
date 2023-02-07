/// <reference types="cypress" />

describe("Algorithms pages", () => {
  it("passes", () => {
    cy.visit("http://localhost:3000/learn/algorithms");
    cy.url().should("include", "/learn/algorithms");
    cy.get("h1").contains("Algorithms");

    cy.get("#breadcrumbs-link-home").contains("Home").click();
    cy.url().should("include", "/");
    cy.get("h1").contains("intrepion");
    cy.go("back");
    cy.url().should("include", "/learn/algorithms");
    cy.get("h1").contains("Algorithms");

    cy.get("#breadcrumbs-link-learn").contains("Learn").click();
    cy.url().should("include", "/learn");
    cy.get("h1").contains("Let's Learn");
    cy.go("back");
    cy.url().should("include", "/learn/algorithms");
    cy.get("h1").contains("Algorithms");
  });
});
