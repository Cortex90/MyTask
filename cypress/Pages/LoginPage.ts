class LoginPage {
    private usernameFieldSelector: string;
    private passwordFieldSelector: string;
    private loginButtonSelector: string;
    private logoSelector: string;
    private errorMessageUnauthorizedUserSelector: string;
    private errorIconSelector: string;
in
    constructor() {
        this.usernameFieldSelector = "#user-name";
        this.passwordFieldSelector = "#password";
        this.loginButtonSelector = "#login-button";
        this.logoSelector = ".login_logo";
        this.errorMessageUnauthorizedUserSelector = ".error-message-container";
        this.errorIconSelector = ".error_icon";
    }

    errorIcon() {
        return cy.get(this.errorIconSelector);
    }

    unauthorizedUserErrorMessage() {
        return cy.get(this.errorMessageUnauthorizedUserSelector);
    }

    logo() {
        return cy.get(this.logoSelector);
    }

    usernameField() {
        return cy.get(this.usernameFieldSelector);
    }

    passwordField() {
        return cy.get(this.passwordFieldSelector);
    }

    loginButton() {
        return cy.get(this.loginButtonSelector);
    }

    login(username: string, password: string) {
        cy.log(`Login to the application with username ${username}`);
        this.usernameField().type(username);
        this.passwordField().type(password, {log: false}); // password will not be displayed in logs
        this.loginButton().click();
    }

    // discussable if in pom we have assertions
    verifyUserIsLoggedIn(username: string) {
        cy.log(`Verify that the user is logged in ${username}`)
        cy.getCookie('session-username')
            .should('exist')
            .should(cookie => {
                expect(cookie?.value).to.equal(username);
            });
    }



}

export default new LoginPage();

