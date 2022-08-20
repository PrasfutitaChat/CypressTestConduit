class homePage{

    elements ={
        yourFeedLink : ()=> cy.contains('Your Feed'),
        settingLink: ()=> cy.get('ul[show-authed=true]').find('.nav-link').eq(2),
        bioInHomePage: ()=> cy.get('p'),
        userNameInHomePage: ()=>cy.get('h4')
        

    }
    navigatetoSettingPage()
    {
        this.elements.settingLink().scrollIntoView().should('be.visible').click();
    }
    

}  
module.exports= new homePage(); 