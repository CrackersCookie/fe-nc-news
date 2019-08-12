import { cyan } from "ansi-colors";

describe("Homepage loads as expected", () => {
  it("Loads the default logged in user, also shows the post article button for a logged in user, dissapears when a user logs out", () => {
    cy.visit("/");

    cy.get('[data-cy="user"]').should("contain", "jessjelly");

    cy.get('[data-cy="post-article"]').should("contain", "Post Article");

    cy.get('[data-cy="log-out"]').click();

    cy.get('[data-cy="post-article"]').should("not.exist");
  });
});
