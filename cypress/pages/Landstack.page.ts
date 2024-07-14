/// <reference types="cypress" />

class LandstackPage {
  navigateToPeoplePage() {
    cy.contains("a", "People").click();
  }

  getBioContent(name: string) {
    cy.contains("h3", `${name}`)
      .scrollIntoView()
      .should("be.visible")
      .closest(".fe-block")
      .next()
      .within(() => {
        cy.get("p.preFade.fadeIn")
          .should("be.visible")
          .then(($bio) => {
            const bioText = $bio.text();
            cy.log(`${name} Bio:`, bioText);
          });
      });
  }
}

export default LandstackPage;
