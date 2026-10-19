// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
 Cypress.Commands.add("login", (email, password, expectedText) => {
  const { admin } = require("../fixtures/selector.json");

  cy.get(admin.email).type(email);
  cy.get(admin.password).type(password);
  cy.get(admin.login).click();
  cy.contains(expectedText).should("be.visible");
});


// находим название фильма в админке и извлекаем его текст для переменной
Cypress.Commands.add("getMovie", () => {
  const { movie } = require("../fixtures/movieSelector.json");

    cy.get(movie.movieTitle).invoke("text");
});

Cypress.Commands.add("getSession", (movieTitle) => {
  const { movie } = require("../fixtures/movieSelector.json");

  cy.contains(movie.title, movieTitle).parents(movie.movie).as("targetMovie"); // находим фильм и сохраняем как алиас
  cy.get("@targetMovie").find(movie.time).first().click(); // бранируем первое время в найденном фильме
});

Cypress.Commands.add("movieSeats", () => {
  const { movie } = require("../fixtures/movieSelector.json");
  const seats = require("../fixtures/seats.json");
    
  seats.forEach((seat) => {
    cy.get(
      `${movie.hall} ${movie.class}(${seat.row}) ${movie.class}(${seat.seat})`,
    ).click();
  });
  cy.get(movie.accept).click();
});
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })