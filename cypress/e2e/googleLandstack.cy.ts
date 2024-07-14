/// <reference types="cypress" />

import GooglePage from "../pages/GoogleSearch.page";

describe("Google Search and Navigate to Landstack Site", () => {
  const googlePage = new GooglePage();

  it("Search for Landstack and Navigate to People Page", () => {
    cy.on("uncaught:exception", (e) => {
      // Prevent Cypress from failing the test on uncaught exceptions
      return false;
    });

    // Visit Google UK
    googlePage.visit();

    // Reject all Cookies
    googlePage.rejectCookies();

    // Search for "Landstack"
    googlePage.search("Landstack");

    // Find and Select Landstack Website
    googlePage.selectSearchResult("Landstack");

    // Visit Landstack Website and Navigate to People Page
    cy.origin("https://www.landstack.co.uk", () => {
      const LandstackPage = Cypress.require("../pages/Landstack.page").default;
      const landstackPage = new LandstackPage();

      // Navigate to People Page
      landstackPage.navigateToPeoplePage();

      // Retrieve Bio Content for MD, Jos Pink
      landstackPage.getBioContent("Jos Pink");
    });
  });
});
