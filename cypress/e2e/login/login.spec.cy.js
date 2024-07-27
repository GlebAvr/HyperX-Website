/// <reference types="cypress" />
// import { faker } from '@faker-js/faker';
// const email=faker.internet.email()
// const password=faker.internet.password()
import loginPage from "../../page_objects/login.page";
import dashboardPage from "../../page_objects/dashboard.page";

describe("LOGIN TEST", () => {
  beforeEach(() => {
    cy.visit("/");
    //cy.viewport(1920, 1080);
  });

  it("Log in with existing account as an Admin", () => {
    // cy.contains('Login').click()
    loginPage.loginBtn.click();
    loginPage.emailInput.type("coolerzamd@gmail.com");
    loginPage.passwordInput.type("123123123");
    loginPage.loginBtn.click();
    cy.url().should("include", "/dashboard/user/profile");
    dashboardPage.selfIcn.click();
    dashboardPage.userMenu.should("contain", "coolerzamd@gmail.com");
    dashboardPage.roleLbl.should("contain", "admin");
  });

  it("Should Logout", () => {
    loginPage.loginBtn.click();
    loginPage.emailInput.type("coolerzamd@gmail.com");
    loginPage.passwordInput.type("123123123");
    loginPage.loginBtn.click();
    dashboardPage.selfIcn.click();
    dashboardPage.logOutBtn.click();
    cy.url().should("include", "/auth/login");
    loginPage.loginWlcmTxt.should("contain", "Sign in to Delek Homes");
  });
});
