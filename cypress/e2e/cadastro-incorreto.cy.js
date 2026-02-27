describe('Página de Cadastro', () => {
  it('Preencher os campos do formulário com dados inválidos e exibir mensagem de erro', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('[data-test="register-button"]').click();
    cy.get('[data-test="submit-button"]').click();
    // .should('be.visible') é usado para verificar se um elemento está visível na página
    cy.contains('É necessário informar um endereço de email').should('be.visible');
    cy.contains('Crie uma senha').should('be.visible');
    cy.contains('Repita a senha criada acima').should('be.visible');
  })
})