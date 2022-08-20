/// <reference types="cypress" />

const fixArray = [{ "name": "desktop", "viewPortWidth": 1280, "viewportHeight": 800 },{ "name": "mobile", "viewPortWidth": 375, "viewportHeight": 667 }];
import landingPage from "../pageobject/landingPage"
import signInPage from "../pageobject/signInPage"
import homePage from "../pageobject/homePage"
import settingPage from '../pageobject/settingPage'

fixArray.forEach((afixture) => {
describe(`Setting feature tests for ${afixture.name}`, () =>
{
    before(() =>{
        cy.visit(Cypress.env('baseURL'));
		landingPage.navigateToSignInPage();

    })

	beforeEach(() =>
	{
		
		cy.viewport(afixture.viewPortWidth,afixture.viewportHeight);
		cy.readFile('cypress/fixtures/users.json').as('UserData');
		
	});


	it("Valid user logins to application and verifies the email & user name in setting page", function()
	{
		
		signInPage.successfulLogin(this.UserData.validEmailID,this.UserData.password);
		homePage.elements.yourFeedLink().scrollIntoView().should('be.visible').
		should('have.attr','class').and('contain','active');
        homePage.navigatetoSettingPage();
        settingPage.verifyEmailfieldValue(this.UserData.validEmailID);
        settingPage.verifyUserNamefieldValue(this.UserData.userName);
        cy.saveLocalStorageCache();
     
       

	})

    it("User enters input in short bio section,updates the password from setting page, verifies the updated bio in home page and logs out from application ", function(){
        const newPassword="Password"+ "-" + Math.random().toString(25).substring(2);
        cy.restoreLocalStorageCache();
        settingPage.enterDataInBioSection(this.UserData.bioDetails);
        settingPage.updatePassword(newPassword);
        settingPage.updateSetting();
        cy.readFile('cypress/fixtures/users.json').then((json) => {
            json.password = newPassword;
            cy.writeFile('cypress/fixtures/users.json', json);
           

        })

        homePage.elements.bioInHomePage().scrollIntoView().should('be.visible').should('have.text',this.UserData.bioDetails);
        homePage.navigatetoSettingPage();
        settingPage.logout();
       
        
        

    })

    it("User is able to login with the new password successfully", function(){
       
        landingPage.navigateToSignInPage();
        signInPage.successfulLogin(this.UserData.validEmailID,this.UserData.password);
		homePage.elements.yourFeedLink().scrollIntoView().should('be.visible').
		should('have.attr','class').and('contain','active');
        

    })

	
})
})