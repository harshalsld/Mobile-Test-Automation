import type {Options} from '@wdio/types';
import {androidCapabilities} from './capabilities.android';

export const config: Options.Testrunner = {
  runner: 'local',
  specs: ['../tests/specs/**/*.spec.ts'],
  exclude: [],
  maxInstances: 1,
  capabilities: androidCapabilities,
  logLevel: 'info',
  bail: 0,
  waitforTimeout: 15000,
  connectionRetryTimeout: 180000,
  connectionRetryCount: 2,
  services: [
    [
      'appium',
      {
        args: {
          relaxedSecurity: true,
        },
      },
    ],
  ],
  framework: 'mocha',
  reporters: ['spec'],
  mochaOpts: {
    ui: 'bdd',
    timeout: 120000,
  },
};
