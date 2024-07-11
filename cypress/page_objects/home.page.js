class HomePage {
    get searchBtn() {return cy.contains('Start Search')};
    get searchBar() {return cy.get('[id=":r20:"]')}
    get searchBedrooms() {return cy.get('[id=":r21:"]')}
    get stateDrpdwn() {return cy.get('[id=":r22:"]')}
    get searchCity() {return cy.get('[id=":r23:"]')}
    }
    
    export default new HomePage()