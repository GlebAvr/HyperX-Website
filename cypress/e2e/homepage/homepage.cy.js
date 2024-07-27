/// <reference types="cypress" />
import homePage from "../../page_objects/home.page";
import productPage from "../../page_objects/product.page";
import { faker } from '@faker-js/faker';
const randomFullName = faker.person.fullName(); // Rowan Nikolaus
const randomEmail = faker.internet.email();
const randomFirstName = faker.person.firstName();
const randomLastName = faker.person.firstName();
const creditCard = faker.finance.creditCardNumber()
const randomCity = faker.location.city()
const randomZipcode = faker.location.zipCode()
const randomPhone = faker.phone.number()

describe("HomePage Suite", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
  });

  it("Check if main tabs work", () => {
    cy.wait(4000);
    homePage.saleTab.click();
    cy.url().should("include", "collections/sale");
    homePage.bundleTab.click();
    cy.url().should("include", "collections/bundles");
    homePage.ngenuityTab.click();
    cy.url().should("include", "pages/ngenuity");
    homePage.gamingHS.click({ force: true });
    cy.url().should("contain", "collections/gaming-headsets");
    cy.contains("Gaming Keyboards").click({ force: true });
    cy.url().should("contain", "collections/gaming-keyboards");
    cy.contains("Mouse Pads").click({ force: true });
    cy.url().should("contain", "collections/mouse-pads");
    cy.contains("Gaming Controllers").click({ force: true });
    cy.url().should("contain", "collections/gaming-controllers");
    cy.contains("Content Creation").click({ force: true });
    cy.url().should("contain", "collections/content-creation");
    cy.contains("Gaming Accessories").click({ force: true });
    cy.url().should("contain", "collections/accessories");
    cy.contains("Microphones").click({ force: true });
    cy.url().should("contain", "collections/microphones");
    cy.contains("Gaming Mice").click({ force: true });
    cy.url().should("contain", "collections/gaming-mice");
    cy.contains("Earbuds").click({ force: true });
    cy.url().should("contain", "collections/earbuds");
    cy.contains("Power").click({ force: true });
    cy.url().should("contain", "collections/power");
    cy.contains("HX3D").click({ force: true });
    cy.url().should("contain", "collections/hx3d");
    cy.contains("All Categories").click({ force: true });
    cy.url().should("contain", "collections/all-categories");
  });

  it("Should open social media links", () => {
    homePage.instagramIcon
      .should("have.attr", "href")
      .and("include", "https://www.instagram.com/hyperx/");
    homePage.discordIcon
      .should("have.attr", "href")
      .and("include", "https://discord.gg/hyperxgaming");
    homePage.facebookIcon
      .should("have.attr", "href")
      .and("include", "https://www.facebook.com/hyperxcommunity");
    homePage.twitterIcon
      .should("have.attr", "href")
      .and("include", "https://twitter.com/hyperx");
    homePage.tiktokIcon
      .should("have.attr", "href")
      .and("include", "https://www.tiktok.com/@hyperx?lang=en");
    homePage.youtubeIcon
      .should("have.attr", "href")
      .and("include", "https://www.youtube.com/c/hyperx");
  });


  it.only('End to End testing', () => {
    cy.get('[class="site-header__icon site-header__icon--search"]').click().realType("alpha{enter}")
    cy.get('[class="product-card"]').eq(0).click()
    cy.contains('Add to Cart').click()
    cy.contains('Checkout').click()
    cy.get('[id="email"]').type(randomEmail)
    cy.get('[placeholder="First name"]').type(randomFirstName)
    cy.get('[placeholder="Last name"]').type(randomLastName)
    cy.get('[placeholder="City"]').type(randomCity)
    cy.get('[placeholder="ZIP code"]').type(randomZipcode)
    cy.get('[placeholder="Phone"]').type(randomPhone)
    // cy.get('#card-fields-number-i7dkndfn06e00000').type(creditCard, {force:true})
    
  })


  
});
