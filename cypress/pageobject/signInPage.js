class signInPage{

    elements ={
        emailInput: ()=> cy.get("[placeholder=Email]"),
        passwordInput: () => cy.get("[placeholder=Password]"),
        signInButton: () => cy.get('[type=submit]'),
        errorMessage: () => cy.get("[ng-repeat='error in errors']")
        

    }

    successfulLogin(email,password)
    {
        this.elements.emailInput().scrollIntoView().should('be.visible').clear().type(email);
        this.elements.passwordInput().scrollIntoView().should('be.visible').clear().type(password);
        this.elements.signInButton().scrollIntoView().should('be.visible').click();

    }
    unsuccessfulLogin(email,password,errorMessage)
    {
        this.elements.emailInput().scrollIntoView().should('be.visible').clear().type(email);
        this.elements.passwordInput().scrollIntoView().should('be.visible').clear().type(password);
        this.elements.signInButton().scrollIntoView().should('be.visible').click();
        this.elements.errorMessage().scrollIntoView().should('be.visible').should('contain.text',errorMessage);

    }



}
module.exports= new signInPage();