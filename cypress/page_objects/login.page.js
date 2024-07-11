class LoginPage {
get emailInput() {return cy.get('input[name="email"]')};
get passwordInput() {return cy.get('input[name="password"]')};
get loginBtn() {return cy.contains('Login')};
get loginWlcmTxt() {return cy.get('.MuiTypography-h4')};
}

export default new LoginPage()



// cy.contains('Login').click()
// cy.get('input[name="email"]').type('coolerzamd@gmail.com')
// cy.get('input[name="password"]').type('123123123')
// cy.contains('Login').click()
// cy.url().should('include','/dashboard/user/profile')
// cy.get('[class="css-1x4nai"]').find('button').click()
// //cy.get('.MuiButtonBase-root.MuiIconButton-root.MuiIconButton-sizeMedium.css-w5qhhs').click()
// //cy.get('.MuiTypography-root.MuiTypography-body2.MuiTypography-noWrap.css-10n697b').should('contain', 'coolerzamd@gmail.com')
// cy.get('.MuiPaper-root').find('.MuiTypography-root').should('contain', 'coolerzamd@gmail.com')
// //cy.get('[class="css-1pv7ovc"]').should('contain','admin')
// cy.get('a p').should('contain','admin')