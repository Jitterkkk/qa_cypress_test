describe('Página de Cadastro', () => {
  it('Deve preencher os campos do formulário corretamente para cadastrar um novo usuário', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    // cypress contains é usado para encontrar um elemento que contenha um texto específico
    cy.contains('a','Cadastrar').click();
    // cypress get é usado para encontrar um elemento com um seletor específico, nesse caso, um input com o nome "nome"
    cy.get('[data-test="input-name"]').type('Biazus');
    cy.get('[data-test="input-email"]').type('biazus@email.com');
    cy.get('[data-test="input-password"]').type('Senha123456');
    cy.get('[data-test="input-confirm-password"]').type('Senha123456');
    // cypress contains é usado novamente para encontrar um botão que contenha o texto "Cadastrar" e clicar nele
    cy.get('[data-test="submit-button"]').click();
  })
})