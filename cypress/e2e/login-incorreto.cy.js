describe("Página de Login", () => {
  before(() => {
    cy.visit("https://adopet-frontend-cypress.vercel.app/");
    cy.get('[data-test="login-button"]').click();
  });

  it("Deve preencher os campos do formulário incorretamente e exibir mensagens de erro ao usuário na página", () => {
    cy.get('[data-test="input-loginEmail"]').type("biazus");
    cy.get('[data-test="input-loginPassword"]').type("senha");
    cy.get('[data-test="submit-button"]').click();

    cy.contains("Por favor, verifique o email digitado").should("be.visible");
    cy.contains("A senha deve conter pelo menos uma letra maiúscula, um número e ter entre 6 e 15 caracteres").should("be.visible");
  });
});