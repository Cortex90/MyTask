// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// It throws an error while loading the page, this method will catch prevent cypress for failling the tests
Cypress.on('uncaught:exception', (err, runnable) => {
    return false
});

/// <reference types="cypress" />

