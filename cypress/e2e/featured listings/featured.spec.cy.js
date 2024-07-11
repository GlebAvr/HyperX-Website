/// <reference types="cypress" />
import featuredPage from "../../page_objects/featured.page";
import homePage from "../../page_objects/home.page";

describe("Featured Listing suit", () => {
    beforeEach(() => {
      cy.visit("/");
      cy.viewport(1920, 1080);
    });
  
  
    it("Should see maxium 6 items", () => {
        homePage.searchBtn.click()
        cy.url().should('include','featured-listings?price=500000-10000000')
        featuredPage.elementsOnPage.should('have.length', '6')
    });
    
    it("Should be able to navigate through the list of the listings", () => {
        homePage.searchBtn.click()
        featuredPage.page2Btn.click()
        featuredPage.elementsOnPage.should('have.length', '6')
        featuredPage.nextPageBtn.click()
               
    });
    it("Zipcode and State are properly shown", () => {
        homePage.searchBtn.click()
        featuredPage.zipcodeIcon.should('have.length', '6').should('be.visible')
        featuredPage.stateIcon.should('have.length', '6').should('be.visible')
      

    });
  
});
  