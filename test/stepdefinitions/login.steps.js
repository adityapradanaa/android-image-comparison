const {Given, Then} = require('@cucumber/cucumber');
const imageCompareHelper = require('../helper/image.compare.helper');
const loginPage = require('../pageobjects/login.page');

Given('User on Kompasid onboarding', async () => {
    await loginPage.validateOnboardingPage();
    await imageCompareHelper.saveScreenshots();
    await imageCompareHelper.compareImages('mainImage');
});
