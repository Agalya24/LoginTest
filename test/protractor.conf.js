//Protractor configuration file
exports.config = {
    defaultTimeoutInterval: 120000,
    getPageTimeout: 60000,
    allScriptsTimeout: 500000,
    specs: ['./features/*.feature'],
    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            args: ["--no-sandbox", "--disable-extensions"],
            perfLoggingPrefs: {
                enableNetwork: true
            }

        },
        loggingPrefs: {
            performance: 'INFO'
        }
    },
    //Use the chrome driver from the environment variable(populated on the hosted build agent) if available, otherwise default to webdriver-manager.
   // chromeDriver: process.env['ChromeWebDriver'] ? require('path').join(process.env['ChromeWebDriver'], './chromedriver.exe') : null,
    //s
    directConnect: true,
    baseUrl: 'http://localhost:8000',
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    cucumberOpts:{
        require: ['./steps/*steps.ts'],
        format: ["progress", "json:results.json"],
        tags: ['~@ignore']
    },
    onPrepare() {
        require('ts-node').register({
            project: require('path').join(__dirname, '../tsconfig.json')
        });
    },
    onComplete: () => {
        const outputPath = `${process.cwd()}/results`;
        const htmlOptions = {
            jsonFile: `${process.cwd()}/results.json`,
            output: `${outputPath}/index.html`,
            reportSuiteAsScenarios: true,
            theme: "bootstrap",
            storeScreenshots: true,
            screenshotsDirectory: outputPath,
        };
        const junitOptions = {
            inputJsonFile: `${process.cwd()}/results.json`
        };
        require('cucumber-html-reporter').generate(htmlOptions);
    },
}