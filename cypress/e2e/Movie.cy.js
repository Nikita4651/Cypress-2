describe("бронирование билетов", () => {
  it("Бронирование билетов из админки", () => {
    const adminLoginData = require("../fixtures/adminDate.json");
    const happy = adminLoginData.happyPath;
    const { movie } = require("../fixtures/movieSelector.json");

    cy.visit("/admin/");
    cy.login(happy.email, happy.password, happy.expectedText);

    cy.getMovie().then((text) => {
      const movieTitle = text.trim();

      cy.visit("/");
      cy.get(movie.fourthDay).click();
      cy.getSession(movieTitle);
      cy.movieSeats();

      cy.contains(movie.assertText).should("be.visible");
    });
  });
});
