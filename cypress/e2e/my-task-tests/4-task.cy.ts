import LoginPage from "../../Pages/LoginPage";
import {decryptPassword} from "../../utils/encrypt";

const username = Cypress.env('Locked_Out_User');
const password = decryptPassword(Cypress.env("password"));
const unauthorizedMessage = "Epic sadface: Sorry, this user has been locked out.";

beforeEach(() => {
    cy.visit('/');
    LoginPage.login(username, password);
})

describe('Locked user iterations ', () => {
    it("Verify that user cannot log in if don't have permission", () => {
        LoginPage.unauthorizedUserErrorMessage()
            .should('be.visible')
            .should('have.css', 'background-color', 'rgb(226, 35, 26)')
            .should('have.text', unauthorizedMessage);
        LoginPage.errorIcon().should('have.length', 2);
        LoginPage.unauthorizedUserErrorMessage().find('button').click();

        // Since the element still exist in the DOM, this assertion will check if the element has empty text
        LoginPage.unauthorizedUserErrorMessage().should('have.text', '');

    })
})