/// <reference types="cypress" />

describe("users", () => {
  it("passes", () => {
    cy.intercept("POST", /^http.*\/LogIns$/, {
      fixture: "logInNewUser.json",
    }).as("logIn");
    cy.intercept("POST", /^http.*\/LogOuts$/, {
      fixture: "logOutNewUser.json",
    }).as("logOut");
    cy.intercept("POST", /^http.*\/Users$/, {
      fixture: "registerNewUser.json",
    }).as("register");

    cy.visit("http://localhost:3000");
    cy.url().should("include", "/");
    cy.get("h1").contains("intrepion");

    cy.get("#navigations-link-register").contains("Register").click();
    cy.url().should("include", "/authentication/register");
    cy.get("h1").contains("Register");
    cy.get("#register-user-name").type("new");
    cy.get("#register-email").type("intrepion@gmail.com");
    cy.get("#register-password").type("newP@ssw0rd");
    cy.get("#register-confirm").type("newP@ssw0rd");
    cy.get("#register-accept").check();

    cy.get("#register-submit").click();
    cy.url().should("include", "/log-in");
    cy.get("h1").contains("Log In");
    cy.get("#log-in-user-name").type("new");
    cy.get("#log-in-password").type("newP@ssw0rd");
    cy.get("#log-in-remember-me").check();

    cy.get("#log-in-submit").click();
    cy.url().should("include", "/");
    cy.get("h1").contains("intrepion");

    cy.get("#navigations-link-log-out").contains("Log Out").click();
    cy.url().should("include", "/authentication/log-in");
    cy.get("h1").contains("Log In");
  });
});
