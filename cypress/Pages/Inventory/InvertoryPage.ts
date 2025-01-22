class InvertoryPage {
    private itemSelector: string;
    private shopingCardSelector: string;
    private shopingCardBadgeSelector: string;
    public addRemoveButtonSelector: (action: string, name: string) => string;
    private onsieImageSelector: string;

    constructor() {
        this.itemSelector = '[data-test="inventory-item-name"]';
        this.shopingCardSelector = '[data-test="shopping-cart-link"]';
        this.shopingCardBadgeSelector = '[data-test="shopping-cart-badge"]';
        this.itemSelector = '[data-test="inventory-item-name"]';
        this.addRemoveButtonSelector = (action: string, name: string) => {
            return `[data-test=${action}-sauce-labs-${name.toLowerCase().replace(/\s+/g, "-")}]`;
        }
        this.onsieImageSelector = '[data-test="inventory-item-sauce-labs-onesie-img"]'
    }

    onsieImage() {
        return cy.get(this.onsieImageSelector);
    }
    getAddRemoveButton(action: string, name: string) {
        return cy.get(this.addRemoveButtonSelector(action, name));
    }

    getItem() {
        return cy.get(this.itemSelector);
    }
    //
    shoppingCard() {
        return cy.get(this.shopingCardSelector);
    }

    shoppingCardBadge() {
        return cy.get(this.shopingCardBadgeSelector);
    }

}

export default new InvertoryPage();