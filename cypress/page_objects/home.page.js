class HomePage {
    get saleTab() {return cy.contains('Sale')};
    get bundleTab() {return cy.contains('Shop Bundles')};
    get shopByCategoryTab() {return cy.contains('Shop By Category')};
    get shopHX3DTab() {return cy.contains('Shop HX3D')};
    get ngenuityTab() {return cy.contains('NGENUITY')};
    get supportTab() {return cy.contains('Support')};
    get instagramIcon() {return cy.get('[href="https://www.instagram.com/hyperx/"]')}
    get facebookIcon() {return cy.get('[href="https://www.facebook.com/hyperxcommunity"]')}
    get discordIcon() {return cy.get('[href="https://discord.gg/hyperxgaming"]')}
    get tiktokIcon() {return cy.get('[href="https://www.tiktok.com/@hyperx?lang=en"]')}
    get youtubeIcon() {return cy.get('[href="https://www.youtube.com/c/hyperx"]')}
    get twitterIcon() {return cy.get('[href="https://twitter.com/hyperx"]')}
    get gamingHS() {return cy.get('[class="icon icon__headset"]')}

    }
    
    export default new HomePage()