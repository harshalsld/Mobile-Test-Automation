import type {Capabilities} from '@wdio/types';
import {loadSampleAppConfig, resolveAppPath} from './app.config';

const sampleApp = loadSampleAppConfig();

const platformVersion = process.env.ANDROID_PLATFORM_VERSION;

export const androidCapabilities: Capabilities.AppiumCapabilities[] = [
  {
    platformName: 'Android',
    'appium:automationName': 'UiAutomator2',
    'appium:deviceName':
      process.env.ANDROID_DEVICE_NAME ?? 'Android Emulator',
    ...(platformVersion ? {'appium:platformVersion': platformVersion} : {}),
    'appium:app': resolveAppPath(sampleApp.android.appPath),
    'appium:appPackage': sampleApp.android.appPackage,
    'appium:appActivity': sampleApp.android.appActivity,
    'appium:autoGrantPermissions': true,
    'appium:newCommandTimeout': 120,
    'appium:adbExecTimeout': 120000,
  },
];
