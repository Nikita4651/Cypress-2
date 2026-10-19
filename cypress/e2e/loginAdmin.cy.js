const newLocal = describe("Login admin tests", () => {
    beforeEach(() => {
        cy.visit("/admin/");
    });

    const adminDate = require("../fixtures/adminDate.json");

    it("Главная страница", async () => {
        const happy = adminDate.happyPath;
        cy.login(happy.email, happy.password, happy.expectedText);
    });

    it("Вход с невалидным email", async () => {
        const happy = adminDate.invalidEmail;
        cy.login(happy.email, happy.password, happy.expectedText);
    });

    it("Вход с невалидным pass", async () => {
        const happy = adminDate.invalidPass;
        cy.login(happy.email, happy.password, happy.expectedText);
    });
});
