/// <reference types="cypress" />

const fixArray = [{ "name": "desktop", "viewPortWidth": 1280, "viewportHeight": 800 }, { "name": "mobile", "viewPortWidth": 375, "viewportHeight": 667 }];
import landingPage from "../pageobject/landingPage"
import homePage from "../pageobject/homePage"
import settingPage from '../pageobject/settingPage'
import signUpPage from '../pageobject/signUpPage'



fixArray.forEach((afixture) => {
    describe(`Setting feature tests for a new user in ${afixture.name} view`, () => {
        before(() => {
            cy.visit(Cypress.env('baseURL'));
            landingPage.navigateToSignUpPage();
            cy.readFile('cypress/fixtures/users.json').then((UserData) => {
                UserData.newUserEmail = 'cypress@gmail.com' + Math.random().toString(25).substring(2);
                UserData.userName = 'cypressUser' + Math.random().toString(25).substring(2);
                cy.writeFile('cypress/fixtures/users.json', UserData);


            })

        })

        beforeEach(() => {

            cy.viewport(afixture.viewPortWidth, afixture.viewportHeight);
            cy.readFile('cypress/fixtures/users.json').as('UserData');

        });

        it("Create an account for a new user using sign up feature", function () {
            signUpPage.successfulSignUP(this.UserData.newUserEmail, this.UserData.password, this.UserData.userName);
            homePage.elements.yourFeedLink().scrollIntoView().should('be.visible').
                should('have.attr', 'class').and('contain', 'active');
            cy.saveLocalStorageCache();

        })


        it("User verifies the email & user name in setting page", function () {

            cy.restoreLocalStorageCache();
            homePage.navigatetoSettingPage();
            settingPage.verifyEmailfieldValue(this.UserData.newUserEmail);
            settingPage.verifyUserNamefieldValue(this.UserData.userName);
            cy.saveLocalStorageCache();



        })

        it("User enters input in short bio section,updates the userName from setting page, verifies the updated bio and userName in home page ", function () {

            cy.restoreLocalStorageCache();
            settingPage.enterDataInBioSection(this.UserData.bioDetails);
            settingPage.updateUserName(this.UserData.userName + "Updated");
            settingPage.updateSetting();
            homePage.elements.bioInHomePage().scrollIntoView().should('be.visible').should('have.text', this.UserData.bioDetails);
            homePage.elements.userNameInHomePage().scrollIntoView().should('be.visible').should('have.text', this.UserData.userName + "Updated");

        })

    })
})

