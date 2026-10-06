import {readFileSync} from 'node:fs';
import path from 'node:path';

export type SampleAppConfig = {
  name: string;
  description: string;
  android: {
    appPath: string;
    appPackage: string;
    appActivity: string;
  };
};

const projectRoot = path.join(__dirname, '..');

export function loadSampleAppConfig(): SampleAppConfig {
  const configPath = path.join(projectRoot, 'apps/sample/app.config.json');
  return JSON.parse(readFileSync(configPath, 'utf8')) as SampleAppConfig;
}

export function resolveAppPath(relativePath: string): string {
  return path.join(projectRoot, relativePath);
}

export {projectRoot};
