import LoginPage from "../../Pages/LoginPage";
import InvertoryPage from "../../Pages/Inventory/InvertoryPage";
import {decryptPassword} from "../../utils/encrypt";

const username = Cypress.env("standard_user");
const password = decryptPassword(Cypress.env("password"));
const loginRedirectUrl = "https://www.saucedemo.com/inventory.html";
const userNamePlaceHolder = "Username";
const passwordPlaceholder = "Password";
const loginButtonText = "Login";
const logoText = "Swag Labs"

describe('Verifying login page functionality', () => {

    beforeEach(() => {
        cy.visit('/');
    })

    it('Verify login page elements', () => {
        LoginPage.logo().invoke('text').should("equal", logoText);
        LoginPage.usernameField().should('have.attr', 'placeholder', userNamePlaceHolder);
        LoginPage.passwordField().should('have.attr', 'placeholder', passwordPlaceholder);
        LoginPage.loginButton().should('have.value', loginButtonText);
    })

    it('Login to the application and verify that user is logged in ', () => {
        LoginPage.login(username, password);

        // Verify that user is logged in
        cy.getCookie('session-username')
            .should('exist')
            .should(cookie => {
                expect(cookie?.value).to.equal(username);
            });
        // Additional approach that is not recommended  in POM
        LoginPage.verifyUserIsLoggedIn(username);

        // Verify that the url is correct
        cy.url().should('eq', loginRedirectUrl);

    });
});