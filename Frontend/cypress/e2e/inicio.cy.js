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

  it('Deve renderizar a p' , () => {
    cy.getByData('ContaDigital').contains('Isso mesmo, nossa conta é digital, sem custo fixo e mais que isso: sem tarifa de manutenção.')
    cy.getByData('acesso24h').contains('Você pode sacar gratuitamente 4x por mês de qualquer Banco 24h.')
    cy.getByData('acumuloPontos').contains('Você pode acumular pontos com suas compras no crédito sem pagar mensalidade!')
    cy.getByData('DispoMoveis').contains('Seus dispositivos móveis (computador e laptop) protegidos por uma mensalidade simbólica.')
  })
})

