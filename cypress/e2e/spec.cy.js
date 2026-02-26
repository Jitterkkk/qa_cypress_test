describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    // cypress contains é usado para encontrar um elemento que contenha um texto específico
    cy.contains('a','Cadastrar').click();
    // cypress get é usado para encontrar um elemento com um seletor específico, nesse caso, um input com o nome "nome"
    cy.get('input[name="nome"]').type('Biazus');
    cy.get('input[name="email"]').type('biazus@email.com');
    cy.get('input[name="password"]').type('Senha123456');
    cy.get('input[name="confirm_password"]').type('Senha123456');
    // cypress contains é usado novamente para encontrar um botão que contenha o texto "Cadastrar" e clicar nele
    cy.contains('button','Cadastrar').click();
  })
})