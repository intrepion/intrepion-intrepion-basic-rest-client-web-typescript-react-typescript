/// <reference types="cypress" />

describe("index pages", () => {
  it("passes", () => {
    cy.visit("http://localhost:3000");
    cy.url().should("include", "/");
    cy.get("h1").contains("intrepion");

    cy.get("#navigations-link-intrepion").contains("intrepion").click();
    cy.url().should("include", "/");
    cy.get("h1").contains("intrepion");

    cy.get("#navigations-link-home").contains("Home").click();
    cy.url().should("include", "/");
    cy.get("h1").contains("intrepion");

    cy.get("#navigations-link-learn").contains("Learn").click();
    cy.url().should("include", "/learn");
    cy.get("h1").contains("Let's Learn");
    cy.go("back");
    cy.url().should("include", "/");
    cy.get("h1").contains("intrepion");

    cy.get("#navigations-link-about").contains("About").click();
    cy.url().should("include", "/about");
    cy.get("h1").contains("OLIVER FORRAL");
    cy.go("back");
    cy.url().should("include", "/");
    cy.get("h1").contains("intrepion");

    cy.get("#navigations-link-log-in").contains("Log In").click();
    cy.url().should("include", "/authentication/log-in");
    cy.get("h1").contains("Log In");
    cy.go("back");
    cy.url().should("include", "/");
    cy.get("h1").contains("intrepion");

    cy.get("#navigations-link-register").contains("Register").click();
    cy.url().should("include", "/authentication/register");
    cy.get("h1").contains("Register");
    cy.go("back");
    cy.url().should("include", "/");
    cy.get("h1").contains("intrepion");

    cy.get("#cards-link-learn").contains("Learn").click();
    cy.url().should("include", "/learn");
    cy.get("h1").contains("Let's Learn");
    cy.go("back");
    cy.url().should("include", "/");
    cy.get("h1").contains("intrepion");

    cy.get("#socials-link-twitter").should(($a) => {
      expect($a.attr("href"), "href").contains("twitter.com");
      expect($a.attr("rel"), "rel").to.equal("noopener noreferrer");
      expect($a.attr("target"), "target").to.equal("_blank");
    });
  });
});
