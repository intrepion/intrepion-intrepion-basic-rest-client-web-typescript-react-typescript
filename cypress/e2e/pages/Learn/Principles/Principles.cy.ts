/// <reference types="cypress" />

describe("Principles pages", () => {
  it("passes", () => {
    cy.visit("http://localhost:3000/learn/principles");
    cy.url().should("include", "/learn/principles");
    cy.get("h1").contains("Principles");

    cy.get("#breadcrumbs-link-home").contains("Home").click();
    cy.url().should("include", "/");
    cy.get("h1").contains("intrepion");
    cy.go("back");
    cy.url().should("include", "/learn/principles");
    cy.get("h1").contains("Principles");

    cy.get("#breadcrumbs-link-learn").contains("Learn").click();
    cy.url().should("include", "/learn");
    cy.get("h1").contains("Let's Learn");
    cy.go("back");
    cy.url().should("include", "/learn/principles");
    cy.get("h1").contains("Principles");

    cy.get("#cards-link-solid-principles").contains("Learn").click();
    cy.url().should("include", "/learn/principles/solid-principles");
    cy.get("h1").contains("Principles");
    cy.go("back");
    cy.url().should("include", "/learn/principles");
    cy.get("h1").contains("Principles");
  });
});
