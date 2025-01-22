import LoginPage from "../../Pages/LoginPage";
import InvertoryPage from "../../Pages/Inventory/InvertoryPage";
import {decryptPassword} from "../../utils/encrypt";
import CardPage from "../../Pages/CardPage";

const username = Cypress.env("standard_user");
const password = decryptPassword(Cypress.env("password"));

const itemName = "Bike Light";

describe('Card functionality', () => {

    beforeEach(() => {
        cy.visit('/');
        LoginPage.login(username, password)
    })

    it('User shouldbe able to add and remove item from shopping card', () => {
        InvertoryPage.getItem().contains(itemName);
        InvertoryPage.getAddRemoveButton("add-to-cart", itemName).click();
        InvertoryPage.shoppingCard().should('be.visible');
        //Extra Checks
        InvertoryPage.shoppingCard().click();
        CardPage.productName().contains(itemName);
        CardPage.continueShoppingButton().should('have.text', "Continue Shopping");
        CardPage.continueShoppingButton().click();
        //
        InvertoryPage.shoppingCardBadge().should('have.text', "1");
        InvertoryPage.getAddRemoveButton("remove", itemName).should('be.visible');
    });
});