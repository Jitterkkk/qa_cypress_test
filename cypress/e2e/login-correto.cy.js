describe("Página de Login", () => {
  before(() => {
    cy.visit("https://adopet-frontend-cypress.vercel.app/");
    cy.get('[data-test="login-button"]').click();
  });

  it("Deve preencher os campos do formulário corretamente para fazer login", () => {

    cy.login("biazus@email.com", "Senha123456");
  });
});