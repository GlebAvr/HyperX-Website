/// <reference types="cypress" />
import homePage from "../../page_objects/home.page";
import productPage from "../../page_objects/product.page";

describe("SALES PAGE", () => {
  beforeEach(() => {
    cy.visit("collections/sale");
    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
      
  });

  it("Should confirm Sale Page opened", () => {
    cy.get('[class="hero__title h2"]').should("have.text", "Sale");
  });

  it("Should add item to basket from SALE tab and compare price", () => {
    cy.get('[class="card-grid__item"] [class="product-price__sale-price"]')
      .eq(0)
      .invoke("text")
      .then((price) => {
        //const price = parseFloat(text.replace(/[^0-9.]/g, ''));
        cy.wrap(price).as("capturedPrice");
      });
    cy.get('[class="card-grid__item"]').eq(0).click();
    productPage.addToCartBtn.click();
    cy.get('[class="icon icon__cart"]').click();
    cy.wait(2000);
    cy.get("@capturedPrice").then((capturedPrice) => {
      cy.get('[class="cart-drawer__total--price h5"]')
        .invoke("text")
        .then((checkoutPrice) => {
          //const checkoutPrice = parseFloat(text.replace(/[^0-9.]/g, ''));
          expect(checkoutPrice).to.equal(capturedPrice);
        });
    });
  });

  it("Should see SALE badge on everyitem", () => {
    cy.get('[class="badge badge--sale"]').each((saleIcon) => {
      cy.wrap(saleIcon).should("be.visible");
    });
  });

  it.only("Checkbox should work", () => {
     cy.get('[class="checkbox__label"]').contains("Headsets").click()
     cy.get('[data-value="25%3A50"]').click()
     cy.url().should("contain", "sale?price_range%5B0%5D=25%3A50&named_tags.Product%5B0%5D=Headsets");
     cy.get('[class="filters__current-value"]').should('contain','Headsets').and('contain','25:50')
    
    
  });
});
