/// <reference types="cypress" />

class GooglePage {
    visit() {
      cy.visit("/");
      cy.intercept({resourceType: /xhr|fetch/}, {log: false});
    }
  
    rejectCookies() {
      cy.get("#W0wltc").click();
    }
  
    search(term: string) {
      cy.get("textarea.gLFyf").type(`${term}{enter}`);
    }
  
    selectSearchResult(termResult) {
        cy.contains("a", termResult)
        .should("have.attr", "href")
        .then(() => cy.contains("a", termResult).click());
    }
  }
  
  export default GooglePage;
  