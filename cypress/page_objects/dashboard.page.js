class DashBoardPage {
    get logOutBtn() {return cy.get('.MuiPaper-root').find('li').contains('Logout')};
    get roleLbl() {return cy.get('a p')};
    get selfIcn() {return cy.get('[class="css-1x4nai"]').find('button')};
    get userMenu() { return cy.get('.MuiPaper-root').find('.MuiTypography-root')};
    }
    
    export default new DashBoardPage()