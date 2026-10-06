import ApiDemosScreen from '../pageobjects/api-demos.screen';

describe('ApiDemos sample APK — smoke', () => {
  it('installs and shows the main API Demos screen', async () => {
    await ApiDemosScreen.waitForHome();
    await expect(ApiDemosScreen.appTitle).toBeDisplayed();
    await expect(ApiDemosScreen.accessibilityEntry).toBeDisplayed();
    await expect(ApiDemosScreen.animationEntry).toBeDisplayed();
  });
});
