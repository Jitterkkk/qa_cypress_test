describe('Api Adopet', () => {
  const authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI3ZGUyMzZjMC01YWFkLTRiMzMtYmJhYS1lNjU3MzE0MTYyNTIiLCJhZG9wdGVyTmFtZSI6IkJpYXp1cyIsImlhdCI6MTc3MjU3MDc3OCwiZXhwIjoxNzcyODI5OTc4fQ.jBxUWVaLt4h8z33alPfgxxsJDnzBlZfWRsGFZLXsWHw`

  it('Mensagens da API Adopet', () => {
    cy.request({
      method: 'GET',
      url: 'https://adopet-api-i8qu.onrender.com/adotante/',
      headers: {
        authorization: authorization
      }
    }).then((res) => {
      expect(res.status).to.equal(200)
      expect(res.body).to.not.be.empty
      expect(res.body).to.have.property('message')
    })
  })
})