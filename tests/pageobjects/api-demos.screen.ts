import {loadSampleAppConfig} from '../../config/app.config';

const sampleApp = loadSampleAppConfig();

class ApiDemosScreen {
  /** Action bar title on the main list (ApiDemos v3.x). */
  get appTitle() {
    return $(
      'android=new UiSelector().textMatches("(?i)(API Demos|ApiDemos|Apis)")',
    );
  }

  menuItem(label: string) {
    return $(`android=new UiSelector().text("${label}")`);
  }

  get accessibilityEntry() {
    return this.menuItem('Accessibility');
  }

  get animationEntry() {
    return this.menuItem('Animation');
  }

  async waitForHome() {
    await this.accessibilityEntry.waitForDisplayed({timeout: 30000});
  }

  async openMenuItem(label: string) {
    const item = this.menuItem(label);
    await item.waitForDisplayed();
    await item.click();
  }

  async relaunchApp() {
    await driver.terminateApp(sampleApp.android.appPackage);
    await driver.activateApp(sampleApp.android.appPackage);
    await this.waitForHome();
  }
}

export default new ApiDemosScreen();
