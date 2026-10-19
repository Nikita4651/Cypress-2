beforeEach(() => {
  cy.visit("/client/index.php");
});

describe("Главная страница: отображение элементов", () => {
  const { main } = require("../fixtures/mainSelector.json");

  it("должен отображать логотип на главной странице", () => {
    cy.contains(main.logo).should("be.visible");
  });

  it("должен отображать корректное количество дней", () => {
    cy.get(main.days).should("have.length", 7);
  });

  it("должен отображать основной блок страницы", () => {
    cy.get(main.body).should("be.visible");
  });
});
