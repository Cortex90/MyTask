// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// cypress/support/commands.ts

// Custom command to store image values to a file


// cypress/support/commands.ts

// Custom command to store image values to a file
/// <reference types="cypress" />

// Cypress Command to decrypt the password
/// <reference types="cypress" />

// Add a Cypress command to decrypt the password
Cypress.Commands.add('decryptPassword', () => {
    // Get the encrypted password from Cypress environment variables
    const encryptedPassword = Cypress.env('ENCRYPTED_PASSWORD');

    if (!encryptedPassword) {
        throw new Error('ENCRYPTED_PASSWORD not found in the environment variable');
    }

    // Base64 decode the password using `atob` and return it as a Cypress-wrapped value
    const decryptedPassword = atob(encryptedPassword);  // Decodes the Base64 string

    return cy.wrap(decryptedPassword);  // Wrap the decrypted value to return it in the Cypress command chain
});





