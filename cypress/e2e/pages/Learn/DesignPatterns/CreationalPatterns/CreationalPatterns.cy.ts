/// <reference types="cypress" />

describe("Creational Patterns pages", () => {
  it("passes", () => {
    cy.visit("http://localhost:3000/learn/design-patterns/creational-patterns");
    cy.url().should("include", "/learn/design-patterns/creational-patterns");
    cy.get("h1").contains("Creational Patterns");

    cy.get("#breadcrumbs-link-home").contains("Home").click();
    cy.url().should("include", "/");
    cy.get("h1").contains("intrepion");
    cy.go("back");
    cy.url().should("include", "/learn/design-patterns/creational-patterns");
    cy.get("h1").contains("Creational Patterns");

    cy.get("#breadcrumbs-link-learn").contains("Learn").click();
    cy.url().should("include", "/learn");
    cy.get("h1").contains("Let's Learn");
    cy.go("back");
    cy.url().should("include", "/learn/design-patterns/creational-patterns");
    cy.get("h1").contains("Creational Patterns");

    cy.get("#breadcrumbs-link-design-patterns")
      .contains("Design Patterns")
      .click();
    cy.url().should("include", "/design-patterns");
    cy.get("h1").contains("Design Patterns");
    cy.go("back");
    cy.url().should("include", "/learn/design-patterns/creational-patterns");
    cy.get("h1").contains("Creational Patterns");
  });
});
