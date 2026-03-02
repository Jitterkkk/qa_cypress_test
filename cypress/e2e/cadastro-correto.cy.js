describe("Página de Cadastro", () => {
  it("Deve preencher os campos do formulário corretamente para cadastrar um novo usuário", () => {
    cy.visit("https://adopet-frontend-cypress.vercel.app/");
    // cypress contains é usado para encontrar um elemento que contenha um texto específico
    cy.get('[data-test="register-button"]').click();
    // cypress get é usado para encontrar um elemento com um seletor específico, nesse caso, um input com o nome "nome"
    cy.cadastrar(
      "Leonardo",
      "leonardo@email.com",
      "Senha123456",
      "Senha123456",
    );
  });
});
