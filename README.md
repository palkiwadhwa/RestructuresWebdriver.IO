***Work-in-Progress***

WDIO Automation Setup

Prerequisites:
1. Install latest node.js https://nodejs.org/en/download/ (version 16 o)
2. Intall IDE (recommend VSCode)
    a. Recommend extensions:
        1. Cucumber full support
        2. DotENV
        3. ESLint
        4. Prettier - Code formatter
        5. Path Intellisense
        6. npm Intellisense
3. Install GIT https://git-scm.com/downloads
    a. Set GIT install path in environment variables (C:\Program Files\Git)

Steps:
1. Clone the wdio repo into your local machine 
    a. https://dev.azure.com/FinAppsEngineering/Solutions%20Guilds/_git/QE-GenericWDIO
2. Create a .env in root directory and add proper credentials (get with anyone on the team for credentials)
3. Run feature files:
    a. run in terminal "npm run test" (need to be in project directory)
    b. run single feature - coming