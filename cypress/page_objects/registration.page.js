class RegistrationPage {
    get registerBtn() {return cy.contains('Register')}
    get submitBtn() {return cy.get('[type="submit"]')}
    get alertEmail() {return cy.contains('Email is required')}
    get alertPsw() {return cy.contains('Password is required')}
    get alertLastName() {return cy.contains('Last name required')}
    get alertFirstName() {return cy.contains('First name required')}
    get firstNameInput() {return cy.get('input[name="firstName"]')}
    get lastNameInput() {return cy.get('input[name="lastName"]')}
    get emailInput() {return cy.get('input[name="email"]')}
    get passwordInput() {return cy.get('input[name="password"]')}
    get alertVldtFailed() {return cy.contains("Input data")}

    }
    
    export default new RegistrationPage()




    // cy.contains('Register').click()
    // cy.get('[type="submit"]').click()
    // cy.contains('Email is required').should('be.visible')
    // cy.contains('Password is required').should('be.visible')
    // cy.contains('Last name required').should('be.visible')
    // cy.contains('First name required').should('be.visible')
    // cy.wait(1500)
    // cy.get('input[name="firstName"]').type('Gleb_testname1')
    // cy.get('input[name="lastName"]').type('Gleb_testlastname1')
    // cy.get('[type="submit"]').click()
    // //cy.get('p[id=":r7:-helper-text"]').should('contain', 'Email is required')
    // //cy.get('p[id=":r8:-helper-text"]').should('contain', 'Password is required')
    // cy.contains('Email is required').should('be.visible')
    // cy.contains('Password is required').should('be.visible')
    // cy.wait(1500)
    // cy.get('input[name="firstName"]').clear()
    // cy.get('input[name="lastName"]').clear()
    // cy.get('input[name="email"]').type('gleb@cypress.com')
    // cy.get('input[name="password"]').type('123456')
    // cy.get('[type="submit"]').click()
    // cy.contains('Last name required').should('be.visible')
    // cy.contains('First name required').should('be.visible')