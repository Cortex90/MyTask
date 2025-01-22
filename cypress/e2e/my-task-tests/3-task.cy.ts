import LoginPage from "../../Pages/LoginPage";
import InvertoryPage from "../../Pages/Inventory/InvertoryPage";
import InventoryItemPage from "../../Pages/Inventory/InventoryItemPage";
import {decryptPassword} from "../../utils/encrypt";

const username = Cypress.env("Problem_User");
const password = decryptPassword(Cypress.env("password"));

const itemName = "Onesie";

describe(('Verifying that image data is correct'), () => {
    beforeEach(() => {
        cy.visit('/');
        LoginPage.login(username, password);
    });

    // Custom added check, because of troubles with the implementing the plugin

    it(`Validating images for the card ${itemName}`, () => {
        cy.log('Gett the values from the first image')
        InvertoryPage.onsieImage().then(($firstImage) => {
            const firstImageSrc = $firstImage.attr('src');
            const firstImageWidth = $firstImage.width();
            const firstImageHeight = $firstImage.height();

            cy.log(`Click on the item ${itemName}`);
            InvertoryPage.getItem().contains(itemName).click();

            cy.log('Compare the values from the first image, with the second one');
            // All this steps will fail separate since Cypress don't have soft-assert
            InventoryItemPage.inventoryImage().should('have.attr', 'src', firstImageSrc);
            InventoryItemPage.inventoryImage().should('have.css', 'width', `${firstImageWidth}px`);
            InventoryItemPage.inventoryImage().should('have.css', 'height', `${firstImageHeight}px`);
        });
    });

});



