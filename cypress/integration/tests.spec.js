import { cyan } from "ansi-colors";

describe("Homepage", () => {
  it("Loads the default logged in user, also shows the post article button for a logged in user, dissapears when a user logs out", () => {
    cy.visit("/");

    cy.get('[data-cy="user"]').should("contain", "jessjelly");

    cy.get('[data-cy="post-article"]').should("contain", "Post Article");

    cy.get('[data-cy="log-out"]').click();

    cy.get('[data-cy="post-article"]').should("not.exist");
  });
  it("Loads a new user when one is selected from the user dropdown", () => {
    cy.visit("/");

    cy.get('[data-cy="select"]').select("tickle122");

    cy.get('[data-cy="user"]').should("contain", "tickle122");
  });
  it("loads the correct topic from the navigation bar", () => {
    cy.visit("/");

    cy.get('[data-cy="football"]').click();

    cy.url().should("include", "/football");
  });
});
