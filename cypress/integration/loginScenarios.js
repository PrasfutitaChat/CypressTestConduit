/// <reference types="cypress" />

const fixArray = [{ "name": "desktop", "viewPortWidth": 1280, "viewportHeight": 800 }, { "name": "mobile", "viewPortWidth": 375, "viewportHeight": 667 }];
import landingPage from "../pageobject/landingPage"
import signInPage from "../pageobject/signInPage"
import homePage from "../pageobject/homePage"

fixArray.forEach((afixture) => {
describe(`Login feature tests for ${afixture.name}`, () =>
{

	beforeEach(() =>
	{
		
		cy.viewport(afixture.viewPortWidth,afixture.viewportHeight);
		cy.visit(Cypress.env('baseURL'));
		landingPage.navigateToSignInPage();
		cy.fixture('users').as('UserData');
		
	});


	it("Verify user is able to login successfully with valid email and password", function()
	{
		
		signInPage.successfulLogin(this.UserData.validEmailID,this.UserData.password);
		homePage.elements.yourFeedLink().scrollIntoView().should('be.visible').
		should('have.attr','class').and('contain','active');
		

        
    })

	it("Verify user is not able to login with invalid email & valid password and getting proper error message",function(){
        signInPage.unsuccessfulLogin(this.UserData.invalidEmailID,this.UserData.password,this.UserData.errorMessage);

	})

	it("Verify user is not able to login with valid email & invalid password and getting proper error message",function(){
        signInPage.unsuccessfulLogin(this.UserData.validEmailID,this.UserData.invalidPassword,this.UserData.errorMessage);

	})
})
})