/// <reference types="cypress" />

describe('Testes para a home', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve renderizar 3 contatos e um campo para adicionar', () => {
        cy.get('.sc-beqWaB').should('have.length', 3)
        cy.get('input').should('have.length', 3)
        cy.get('.adicionar').should('have.length', 1)
        cy.screenshot('tela-inicial')
    })

    it('Deve adicionar um contato', () => {
        cy.get('[type="text"]').type('Lucas Ezequiel')
        cy.get('[type="email"]').type('email@gmail.com')
        cy.get('[type="tel"]').type('11 91234-1234')
        cy.get('.adicionar').click()
        cy.get('.sc-beqWaB').should('have.length', 4)

        cy.screenshot('contato-adicionado')
    })

    it('Deve alterar o contado', () => {
        cy.get(':nth-child(5) > .sc-gueYoa > .edit').click()
        cy.get('[type="text"]').clear().type('Gabriel Ezequiel')
        cy.get('[type="tel"]').clear().type('11 94321-4321')
        cy.get('.alterar').click()
    })

    it('Deve excluir o contato', () => {
        cy.get(':nth-child(5) > .sc-gueYoa > .delete').click()
    })
})