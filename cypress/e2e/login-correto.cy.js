describe("Página de Login", () => {
  before(() => {
    cy.visit("https://adopet-frontend-cypress.vercel.app/");
    cy.get('[data-test="login-button"]').click();
  });

  it("Deve preencher os campos do formulário corretamente para fazer login", () => {
    cy.get('[data-test="input-loginEmail"]').type("biazus@email.com");
    cy.get('[data-test="input-loginPassword"]').type("Senha123456");
    cy.get('[data-test="submit-button"]').click();
  });
});