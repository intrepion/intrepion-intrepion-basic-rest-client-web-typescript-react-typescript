/// <reference types="cypress" />

describe("Best Practices pages", () => {
  it("passes", () => {
    cy.visit("http://localhost:3000/learn/best-practices");
    cy.url().should("include", "/learn/best-practices");
    cy.get("h1").contains("Best Practices");

    cy.get("#breadcrumbs-link-home").contains("Home").click();
    cy.url().should("include", "/");
    cy.get("h1").contains("intrepion");
    cy.go("back");
    cy.url().should("include", "/learn/best-practices");
    cy.get("h1").contains("Best Practices");

    cy.get("#breadcrumbs-link-learn").contains("Learn").click();
    cy.url().should("include", "/learn");
    cy.get("h1").contains("Let's Learn");
    cy.go("back");
    cy.url().should("include", "/learn/best-practices");
    cy.get("h1").contains("Best Practices");
  });
});
