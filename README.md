# Mobile Test Automation

**Appium + WebdriverIO** framework that tests a **bundled sample APK** (no app source in this repo). The app under test is [Appium Android ApiDemos](https://github.com/appium/android-apidemos), stored at [`apps/sample/ApiDemos-debug.apk`](apps/sample/ApiDemos-debug.apk).

## Layout

```text
apps/sample/           Sample APK + app.config.json (package / activity)
config/                WebdriverIO + Appium capabilities
tests/specs/           Mocha test specs
tests/pageobjects/     Screen helpers for the sample app
scripts/               APK download and device listing
```

To swap the APK, replace the file, update [`apps/sample/app.config.json`](apps/sample/app.config.json), and adjust page objects/selectors in `tests/`.

## Prerequisites

- Node.js 20+
- JDK 17+
- Android SDK (`ANDROID_HOME`), platform-tools and emulator on `PATH`
- A running emulator or USB device with USB debugging enabled

Install Appium’s UiAutomator2 driver once (also attempted on `npm install`):

```bash
npx appium driver install uiautomator2
```

## Setup

```bash
npm install
npm run app:download    # re-fetch APK if missing
npm run devices:list    # adb devices + AVD list
```

Optional: copy [`config/devices.env.example`](config/devices.env.example) and export `ANDROID_DEVICE_NAME` / `ANDROID_PLATFORM_VERSION`.

## Run tests

Start an emulator (or connect a device), then:

```bash
npm run test:android
```

Single spec:

```bash
npm run test:android:spec -- tests/specs/smoke.spec.ts
```

WebdriverIO starts the Appium service, installs [`apps/sample/ApiDemos-debug.apk`](apps/sample/ApiDemos-debug.apk) on the device, and runs specs against package `io.appium.android.apis`.

## Sample tests

| Spec | Coverage |
|------|----------|
| `tests/specs/smoke.spec.ts` | Launch, main “API Demos” screen, key menu entries |
| `tests/specs/navigation.spec.ts` | Open list sections, system back to home |

## Troubleshooting

- **SDK location not found**: Set `ANDROID_HOME` and create `android/local.properties` is not needed for this project—only SDK for `adb`/emulator.
- **Session not created**: Run `npm run appium:doctor` and ensure an emulator is booted (`adb devices`).
- **Wrong OS version**: Set `ANDROID_PLATFORM_VERSION` to match the emulator API level.
- **Stale app state**: Uninstall `io.appium.android.apis` from the device or use a fresh AVD.

## References

- [WebdriverIO Appium setup](https://webdriver.io/docs/appium-service)
- [Appium Android ApiDemos](https://github.com/appium/android-apidemos)
