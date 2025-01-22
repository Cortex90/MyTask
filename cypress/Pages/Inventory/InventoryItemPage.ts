class InventoryItemPage {
    private inventoryImageContainerSelector: string;
    private inventoryContainerTextSelector: string;
    private inventoryContainerDescriptionSelector: string;
    private inventoryItemPriceSelector: string;
    private addToCardButtonSelector: string;
    private removeCardButtonSelector: string;

    constructor() {
        this.inventoryContainerTextSelector = '[data-test="inventory-item-name"]';
        this.inventoryContainerDescriptionSelector = '[data-test="inventory-item-desc"]';
        this.inventoryItemPriceSelector = '[data-test="inventory-item-price"]';
        this.inventoryImageContainerSelector = ".inventory_details_img";
        this.addToCardButtonSelector = '[data-test="add-to-cart"]';
        this.removeCardButtonSelector = '#remove';


    }

    inventoryTextContainer() {
        return cy.get(this.inventoryContainerTextSelector)
    }

    inventoryDescription() {
        return cy.get(this.inventoryContainerDescriptionSelector);
    }

    inventoryItemPrice() {
        return cy.get(this.inventoryItemPriceSelector);
    }

    inventoryImage() {
        return cy.get(this.inventoryImageContainerSelector);
    }

    addToCardButton() {
        return cy.get(this.addToCardButtonSelector);
    }

    removeCardButton() {
        return cy.get(this.removeCardButtonSelector);
    }


}

export default new InventoryItemPage();