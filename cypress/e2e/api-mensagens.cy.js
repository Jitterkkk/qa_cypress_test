describe('Api Adopet', () => {
  const tempoEsperado = Math.random() * 50000 // Flake Test: Tempo de resposta aleatório entre 0 e 50 segundos

  it('Mensagens da API Adopet', () => {
    cy.request({
      method: 'GET',
      url: 'https://adopet-api-i8qu.onrender.com/adotante/',
      headers: Cypress.env()
    }).then((res) => {
      expect(res.status).to.equal(200)
      expect(res.body).to.not.be.empty
      expect(res.body).to.have.property('message')
      expect(res.duration).to.be.lte(tempoEsperado)
    })
  })
})