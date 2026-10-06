import ApiDemosScreen from '../pageobjects/api-demos.screen';

describe('ApiDemos sample APK — navigation', () => {
  beforeEach(async () => {
    await ApiDemosScreen.waitForHome();
  });

  it('opens the Accessibility section from the home list', async () => {
    await ApiDemosScreen.openMenuItem('Accessibility');
    await expect(
      $('android=new UiSelector().text("Accessibility Node Provider")'),
    ).toBeDisplayed();
  });

  it('returns to the home list with the system back key', async () => {
    await ApiDemosScreen.openMenuItem('Animation');
    await expect(
      $('android=new UiSelector().text("Default Layout Animations")'),
    ).toBeDisplayed();

    await driver.back();
    await ApiDemosScreen.waitForHome();
    await expect(ApiDemosScreen.appTitle).toBeDisplayed();
  });
});
