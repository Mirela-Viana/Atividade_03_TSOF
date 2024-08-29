describe('Menu de navegação', () => {
    context('Reslução de 720p', () =>{
        beforeEach(() => {

        cy.viewport(1280, 720)
        }) 
    })

    context('Reslução de macbook-11', () =>{
        beforeEach(() => {

            cy.viewport(1366,768)
            cy.viewport('macbook-11')

        }) 
    })

    context('Reslução do iphone-5', () =>{
        beforeEach(() => {

        cy.viewport('iphone-5')
        }) 
    })

    context('Reslução do samsung-note9', () =>{
        beforeEach(() => {
        
        cy.viewport(4290,2800)
        cy.viewport('samsung-note9')
        }) 
    })

    context('Reslução do ipad-mini', () =>{
        beforeEach(() => {
        
        cy.viewport(2266,1488)
        cy.viewport('ipad-mini')
        }) 
    })

})

describe('Testando dispositivos móveis', () => {
			it('Deve existir um menu burguer', () => {
				cy.visit('/')

                cy.viewport('macbook-11')
				
				cy.getByData('botao-login').click()
				cy.getByData('email-input').type('neilton@alura.com')
				cy.getByData('senha-input').type('123456')
				cy.getByData('botao-enviar').click()
				
				cy.location('pathname').should('eq','/home')

				cy.getByData('menu-burguer').click()
				cy.getByData('menu-lateral').find('a').eq(3).click()			

				cy.location('pathname').should('eq','/home/investimentos')			
			})
		})
		