/// <reference types="cypress" />

describe("Design Patterns pages", () => {
  it("passes", () => {
    cy.visit("http://localhost:3000/learn/design-patterns");
    cy.url().should("include", "/learn/design-patterns");
    cy.get("h1").contains("Design Patterns");

    cy.get("#breadcrumbs-link-home").contains("Home").click();
    cy.url().should("include", "/");
    cy.get("h1").contains("intrepion");
    cy.go("back");
    cy.url().should("include", "/learn/design-patterns");
    cy.get("h1").contains("Design Patterns");

    cy.get("#breadcrumbs-link-learn").contains("Learn").click();
    cy.url().should("include", "/learn");
    cy.get("h1").contains("Let's Learn");
    cy.go("back");
    cy.url().should("include", "/learn/design-patterns");
    cy.get("h1").contains("Design Patterns");

    cy.get("#cards-link-creational-patterns").contains("Learn").click();
    cy.url().should("include", "/learn/design-patterns/creational-patterns");
    cy.get("h1").contains("Creational Patterns");
    cy.go("back");
    cy.url().should("include", "/learn/design-patterns");
    cy.get("h1").contains("Design Patterns");

    cy.get("#cards-link-structural-patterns").contains("Learn").click();
    cy.url().should("include", "/learn/design-patterns/structural-patterns");
    cy.get("h1").contains("Structural Patterns");
    cy.go("back");
    cy.url().should("include", "/learn/design-patterns");
    cy.get("h1").contains("Design Patterns");

    cy.get("#cards-link-behavioral-patterns").contains("Learn").click();
    cy.url().should("include", "/learn/design-patterns/behavioral-patterns");
    cy.get("h1").contains("Behavioral Patterns");
    cy.go("back");
    cy.url().should("include", "/learn/design-patterns");
    cy.get("h1").contains("Design Patterns");

    cy.get("#cards-link-concurrency-patterns").contains("Learn").click();
    cy.url().should("include", "/learn/design-patterns/concurrency-patterns");
    cy.get("h1").contains("Concurrency Patterns");
    cy.go("back");
    cy.url().should("include", "/learn/design-patterns");
    cy.get("h1").contains("Design Patterns");

    cy.get("#cards-link-architectural-patterns").contains("Learn").click();
    cy.url().should("include", "/learn/design-patterns/architectural-patterns");
    cy.get("h1").contains("Architectural Patterns");
    cy.go("back");
    cy.url().should("include", "/learn/design-patterns");
    cy.get("h1").contains("Design Patterns");
  });
});
