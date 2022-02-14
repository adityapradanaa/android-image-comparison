// Onboarding
const onboardingButton = $('//*[@text="Lanjut"]');

const Onboarding = function home() {
    this.validateOnboardingPage = async () => {
        await onboardingButton.waitForExist({timeout: 10000});
        await expect(onboardingButton).toBeDisplayed();
        await browser.pause(3000);
    }
}

module.exports = new Onboarding();
