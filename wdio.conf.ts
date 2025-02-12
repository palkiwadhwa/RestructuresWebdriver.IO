const tsNode = require('ts-node');
exports.config = {
  runner: 'local',
  autoCompileOpts: {
    autoCompile: true,
    tsNodeOpts: {
      transpileOnly: true,
      project: "tsconfig.json",
    },
  // autoCompileOpts: {
  //   autoCompile: true,
  //   tsNodeOpts: {
  //     project: './tsconfig.e2e.json',
  //   }
  },
  specs: ["C:/RestructuresAutomation/RestructuresWebdriverIO/test/features/demo/restructures.feature"],
  exclude: [
  ],
  maxInstances: 10,
  capabilities: [
    {
      maxInstances: 1,
      browserName: "chrome",
      "goog:chromeOptions": {
        args: [
           // "--disable-web-security",
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
  baseUrl: 'http://localhost:4200/',
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  framework: 'cucumber',
  reporters: ['spec'],
  // cucumberOpts: {
  //   require: ["./test/steps/*.js"],
  //   requirModule: ["tsconfig-paths/register"]

  // },
  cucumberOpts: {
    require: ["./test/steps/*.ts"],
    backtrace: false,
    //requirModule: ["tsconfig-paths/register"],
   requirModule: ["@babel/register"],
    dryRun: false,
    failFast: false,
    snippets: true,
    source: true,
    strict: false,
    tagExpression: "@qa",
    timeout: 60000,
    ignoreUndefinedDefinitions: false,
  },
}


