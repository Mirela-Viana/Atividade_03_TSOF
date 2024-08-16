describe('Página Inicial', () => {
  beforeEach( () => {
    cy.visit('http://localhost:3000/')
  })
  it('Deve renderizar h1 com o texto correto!', () => {
    
    cy.getByData('titulo-principal').contains('Experimente mais liberdade no controle da sua vida financeira. Crie sua conta com a gente!')
    //cy.get('h1').contains('Experimente mais liberdade no controle da sua vida financeira. Crie sua conta com a gente!')

    cy.containsText('titulo-principal','Experimente mais liberdade no controle da sua vida financeira. Crie sua conta com a gente!')
    cy.checkTextInVantagem('Vantagens')
  })

  it('Deve renderizar a imagem' , () => {
    cy.getByData('imagem1')
    cy.getByData('imagem2')
    cy.getByData('imagem3')
    cy.getByData('imagem4')
    cy.getByData('imagem5')

  })

  it('Deve renderizar a h2' , () => {
    cy.getByData('vantagensBanco').contains('Vantagens do nosso banco:')
  })

  it('Deve renderizar a h3' , () => {
    cy.getByData('ContaCartao').contains('Conta e cartão gratuitos')
    cy.getByData('saques').contains('Saques sem custo')
    cy.getByData('pontos').contains('Programa de pontos')
    cy.getByData('segurosDispositivos').contains('Seguro Dispositivos')
  })
})

