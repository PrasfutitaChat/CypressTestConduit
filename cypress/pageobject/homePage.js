class homePage{

    elements ={
        yourFeedLink : ()=> cy.contains('Your Feed'),
        settingLink: ()=> cy.get('ul[show-authed=true]').find('.nav-link').eq(2),
        bioInHomePage: ()=> cy.get('p')
        

    }
    navigatetoSettingPage()
    {
        this.elements.settingLink().scrollIntoView().should('be.visible').click();
    }
    

}  
module.exports= new homePage(); 