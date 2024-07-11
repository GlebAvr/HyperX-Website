class FeaturedPage {
    get elementsOnPage() {return cy.get('[width="1.19em"]')};
    get page2Btn() {return cy.get('[aria-label="Go to page 2"]')}
    get nextPageBtn() {return cy.get('[data-testid="NavigateNextIcon"]')}
    get zipcodeIcon()  {return  cy.get ('[class="MuiBox-root css-12z0wuy iconify iconify--icon-park-outline"]')}
    get stateIcon()  {return   cy.get('[class="MuiBox-root css-12z0wuy iconify iconify--gis"]')}
    


}
    
    export default new FeaturedPage()

 