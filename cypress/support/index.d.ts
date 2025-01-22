declare namespace Cypress {
    interface Chainable<Subject = any> {
        storeImageValuesToFile(imageSelector: string, fileName: string): void
        compareImageValuesFromFile(imageSelector: string, fileName: string): Chainable<void>;

        decryptPassword(): Chainable<string>;
    }
}