class CardPage {
    continueShoppingButtonSelector: string;
    productNameSelector: string;
    addToCardSelector: string;
    shoppingCardBadgeSelector:string;
    shoppingCardSelector: string;


    constructor() {
        this.continueShoppingButtonSelector = '[data-test="continue-shopping"]';
        this.productNameSelector = '[data-test="inventory-item-name"]';
        this.addToCardSelector = '[data-test="add-to-cart"]';
        this.shoppingCardBadgeSelector = '[data-test="shopping-cart-badge"]';
        this.shoppingCardSelector = '[data-test="shopping-cart-link"]';


    }

    continueShoppingButton() {
        return cy.get(this.continueShoppingButtonSelector);
    }

    productName() {
        return cy.get(this.productNameSelector);
    }

    shoppingCardBadge() {
        return cy.get(this.shoppingCardBadgeSelector);
    }

    shoppingCard() {
        return cy.get(this.shoppingCardSelector);
    }


}

export default new CardPage();
