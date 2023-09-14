describe('should open successfully', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('displays home page', () => {
    cy.get('h1').should('have.text', 'Home')
  })
})
