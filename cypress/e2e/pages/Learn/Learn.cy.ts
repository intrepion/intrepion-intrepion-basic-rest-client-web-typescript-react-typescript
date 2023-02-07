/// <reference types="cypress" />

describe("Learn pages", () => {
  it("passes", () => {
    cy.visit("http://localhost:3000/learn");
    cy.url().should("include", "/learn");
    cy.get("h1").contains("Let's Learn");

    cy.get("#breadcrumbs-link-home").contains("Home").click();
    cy.url().should("include", "/");
    cy.get("h1").contains("intrepion");
    cy.go("back");
    cy.url().should("include", "/learn");
    cy.get("h1").contains("Let's Learn");

    cy.get("#cards-link-data-structures").contains("Learn").click();
    cy.url().should("include", "/learn/data-structures");
    cy.get("h1").contains("Data Structures");
    cy.go("back");
    cy.url().should("include", "/learn");
    cy.get("h1").contains("Let's Learn");

    cy.get("#cards-link-algorithms").contains("Learn").click();
    cy.url().should("include", "/learn/algorithms");
    cy.get("h1").contains("Algorithms");
    cy.go("back");
    cy.url().should("include", "/learn");
    cy.get("h1").contains("Let's Learn");

    cy.get("#cards-link-design-patterns").contains("Learn").click();
    cy.url().should("include", "/learn/design-patterns");
    cy.get("h1").contains("Design Patterns");
    cy.go("back");
    cy.url().should("include", "/learn");
    cy.get("h1").contains("Let's Learn");

    cy.get("#cards-link-principles").contains("Learn").click();
    cy.url().should("include", "/learn/principles");
    cy.get("h1").contains("Principles");
    cy.go("back");
    cy.url().should("include", "/learn");
    cy.get("h1").contains("Let's Learn");

    cy.get("#cards-link-best-practices").contains("Learn").click();
    cy.url().should("include", "/learn/best-practices");
    cy.get("h1").contains("Best Practices");
    cy.go("back");
    cy.url().should("include", "/learn");
    cy.get("h1").contains("Let's Learn");
  });
});
