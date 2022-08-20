class signUpPage{

    elements ={
        userNameInput: ()=> cy.get("[placeholder=Username]"),
        emailInput: ()=> cy.get("[placeholder=Email]"),
        passwordInput: () => cy.get("[placeholder=Password]"),
        signUpButton: () => cy.get('[type=submit]'),
        
        

    }

    successfulSignUP(email,password,username)
    {
        this.elements.userNameInput().scrollIntoView().should('be.visible').clear().type(username);
        this.elements.emailInput().scrollIntoView().should('be.visible').clear().type(email);
        this.elements.passwordInput().scrollIntoView().should('be.visible').clear().type(password);
        this.elements.signUpButton().scrollIntoView().should('be.visible').click();

    }
    



}
module.exports= new signUpPage();