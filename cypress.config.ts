import {defineConfig} from 'cypress';


export default defineConfig({
    e2e: {
        specPattern: "cypress/e2e/**/*.{cy,spec}.{js,ts}",
        baseUrl: "https://www.saucedemo.com/",
        chromeWebSecurity: false,
        experimentalRunAllSpecs: true
    },

});


