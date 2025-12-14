const reporter = require('cucumber-html-reporter');

const options = {
    theme: 'bootstrap',
    jsonFile: 'reports/report.json',
    output: 'reports/report.html',
    reportSuiteAsScenarios: true,
    scenarioTimestamp: true,
    launchReport: false
};

reporter.generate(options);
