describe('Página Inicial', () => {
  it('deve carregar a home com sucesso', () => {
    cy.visit('/')
    cy.get('body').should('be.visible')
  })
})
