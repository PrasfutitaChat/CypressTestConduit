class landingPage{

    elements ={
        signInLink: ()=> cy.contains('Sign in'),
        signUpLink: ()=> cy.contains('Sign up')
        

    }

    navigateToSignInPage()
    {
        this.elements.signInLink().scrollIntoView().should('be.visible').click();

    }

    navigateToSignUpPage()
    {
        this.elements.signUpLink().scrollIntoView().should('be.visible').click();

    }




}
module.exports= new landingPage();