/// <reference types="cypress"/>
import { faker } from '@faker-js/faker'


describe('Automação no Hub de Leitura', () => {

  beforeEach(() => {
    cy.visit("index.html")
    cy.get('#account-link').click()
    cy.get('[href="/register.html"]').click()
  });

  it('Deve automatizar o Cadastro e Login', () => {
    cy.register()
    cy.login()
  });
});