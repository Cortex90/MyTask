// Simple command for demonstration for decryption, for demo
export function decryptPassword(encryptedPassword: string): string {
    return Buffer.from(encryptedPassword, Cypress.env('encryptionType')).toString('utf-8');
}
