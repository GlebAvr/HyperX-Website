import { faker } from "@faker-js/faker";

const email = faker.internet.email();

const password = faker.internet.password();

import registrationPage from "../../page_objects/registration.page";
import dashboardPage from "../../page_objects/dashboard.page";

describe("REGISTRATION SUIT", () => {
  beforeEach(() => {
    cy.visit("https://dev.delekhomes.com/");
    cy.viewport(1920, 1080);
  });
  it("Should not register without filling in required fields", () => {
    registrationPage.registerBtn.click();
    registrationPage.submitBtn.click();
    registrationPage.alertEmail.should("be.visible");
    registrationPage.alertPsw.should("be.visible");
    registrationPage.alertLastName.should("be.visible");
    registrationPage.alertFirstName.should("be.visible");
    registrationPage.firstNameInput.type("Gleb_testname1");
    registrationPage.lastNameInput.type("Gleb_testlastname1");
    registrationPage.submitBtn.click();
    registrationPage.alertEmail.should("be.visible");
    registrationPage.alertPsw.should("be.visible");
    registrationPage.firstNameInput.clear();
    registrationPage.lastNameInput.clear();

    registrationPage.emailInput.type("gleb@cypress.com");
    registrationPage.passwordInput.type("123456");
    registrationPage.submitBtn.click();
    registrationPage.alertLastName.should("be.visible");
    registrationPage.alertFirstName.should("be.visible");
  });
  it("Should not register with existing email", () => {
    registrationPage.registerBtn.click();
    registrationPage.firstNameInput.type("Gleb_testname1");
    registrationPage.lastNameInput.type("Gleb_testlastname1");
    registrationPage.emailInput.type("coolerzamd@gmail.com");
    registrationPage.passwordInput.type("123456");
    registrationPage.submitBtn.click();
    cy.wait(1000);
    cy.url().should("include", "/auth/register");
    registrationPage.alertVldtFailed.should(
      "have.text",
      "Input data validation failed"
    );
  });

  it("Should register a new account", () => {
    registrationPage.registerBtn.click();
    registrationPage.firstNameInput.type("Gleb_testname1");
    registrationPage.lastNameInput.type("Gleb_testlastname1");
    registrationPage.emailInput.type(email);
    registrationPage.passwordInput.type(password);
    registrationPage.submitBtn.click();
    cy.url().should("include", "/dashboard/user/profile");
    dashboardPage.selfIcn.click();
    dashboardPage.userMenu.should("contain", email);
  });
});
