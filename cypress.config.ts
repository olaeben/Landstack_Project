import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "https://www.google.co.uk",
    setupNodeEvents(on, config) {

    },
    experimentalOriginDependencies: true,
  },
});
