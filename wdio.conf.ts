import type { Options } from '@wdio/types'
export const config: Options.Testrunner = {
  runner: 'local',
  autoCompileOpts: {
    autoCompile: true,
    tsNodeOpts: {
      project: './tsconfig.e2e.json',
    }
  },
  specs: ["C:/Users/akash.malik/RestructuresAutomation/test/features/demo/restructures.feature"],
  exclude: [
  ],
  maxInstances: 10,
  capabilities: [
    {
      maxInstances: 1,
      browserName: "chrome",
      "goog:chromeOptions": {
        args: [
          //  "--disable-web-security",
          "--window-size-=1920,1080",
          "--disable-gpu",
        ],
      },
      acceptInsecureCerts: true,
      //  timeouts: { implicit: 10000, pageLoad: 20000, script: 30000 },
    },
  ],
  logLevel: "error",
  bail: 0,
  baseUrl: 'http://devpc-pi4tlt0:49242/restructure-ui/restructures/assetSelection',
  //baseUrl: 'https://www.google.com',
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  framework: 'cucumber',
  reporters: ['spec'],
  cucumberOpts: {
    require: ["./test/steps/*.ts"],

  },
}


