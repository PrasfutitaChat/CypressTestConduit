class homePage{

    elements ={
        signInLink: ()=> cy.contains('Sign in')
        

    }

    navigateToSignInPage()
    {
        this.elements.signInLink().scrollIntoView().should('be.visible').click();

    }



}
module.exports= new homePage();