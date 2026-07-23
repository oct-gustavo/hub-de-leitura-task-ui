/// <reference types="cypress"/>
import { faker } from '@faker-js/faker'

Cypress.Commands.add('register', () => {

    const fnome = faker.person.fullName()
    const femail = faker.internet.email()
    const ftelefone = faker.phone.number()
    // Deve preencher o form de registro
    cy.get('#name').type(fnome)
    cy.get('#email').type(femail)
    cy.get('#phone').type(ftelefone)
    cy.get('#password').type("teste0210")
    cy.get('#confirm-password').type("teste0210")
    cy.get('#terms-agreement').click()
    cy.get('#register-btn').click()

})

Cypress.Commands.add('login', () => {

    cy.visit('login.html')
    cy.get('#email').type('Neal_Heidenreich87@yahoo.com')
    cy.get('#password').type('teste0210')
    cy.get('#login-btn').click()

})