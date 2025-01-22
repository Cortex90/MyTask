import LoginPage from "../../Pages/LoginPage";
import InvertoryPage from "../../Pages/Inventory/InvertoryPage";
import {decryptPassword} from "../../utils/encrypt";
import InventoryItemPage from "../../Pages/Inventory/InventoryItemPage";
import CardPage from "../../Pages/CardPage";


const username = Cypress.env('error_user');
const password = decryptPassword(Cypress.env("password"));
const item = "Fleece Jacket";

describe(('Error user checks'), () => {

    beforeEach(() => {
        cy.visit("/");
        LoginPage.login(username, password);
    })

    // This test should fail
    it('Verify that Labs Fleece can be added to the card', () => {
        InvertoryPage.getItem().contains(item);
        InvertoryPage.getAddRemoveButton("add-to-cart", item).click();
        CardPage.shoppingCard().should('be.visible');
        CardPage.shoppingCardBadge().should('have.text', "1");
        InvertoryPage.getAddRemoveButton("remove", item).should('be.visible');

        // In case the test pass here will be checked into the Inventory Item Page... treated as a reported bug
        InvertoryPage.getItem().contains(item).click();
        InventoryItemPage.addToCardButton().click();

        // reusing the components, Pom structure need to be created
        CardPage.shoppingCardBadge().should('have.text', "1");
        InventoryItemPage.removeCardButton().should('be.visible')
    });
});