class settingPage{

    elements ={
        header : ()=> cy.get('h1'),
        textAreaInput: () => cy.get('textarea'),
        updateSettingButton : () => cy.get('[type=submit]'),
        clickHereLogoutButton : () => cy.get('.btn-outline-danger'),
        emailInput: () =>cy.get('[type=email]'),
        newPasswordInput: () => cy.get('[type=password]'),
        userNameInput: () => cy.get('[placeholder=Username]')
        

    }
    verifyEmailfieldValue(email)
    {
        this.elements.emailInput().scrollIntoView().should('be.visible').should('have.value',email);
    }
    verifyUserNamefieldValue(userName)
    {
        this.elements.userNameInput().scrollIntoView().should('be.visible').should('have.value',userName);
    }
    enterDataInBioSection(data)
    {
        this.elements.textAreaInput().scrollIntoView().should('be.visible').clear().type(data);
        this.elements.textAreaInput().should('have.value',data);

    }
    updatePassword(newPassword)
    {
        this.elements.newPasswordInput().scrollIntoView().should('be.visible').type(newPassword);
    }
    updateSetting()
    {
        this.elements.updateSettingButton().click();
    }
    logout()
    {
        this.elements.clickHereLogoutButton().scrollIntoView().should('be.visible').click();
    }


    

}  
module.exports= new settingPage(); 