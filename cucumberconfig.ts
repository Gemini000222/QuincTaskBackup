import {Config} from "protractor";

export let config: Config = {
    // The address of a running selenium server.
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,  //we dont have to start selenium server
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),

    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        browserName: 'chrome'
    },

    // Spec patterns are relative to the configuration file location passed
    // to protractor (in this example conf.js).
    // They may include glob patterns.
    specs: ['../feature/demo.feature'],

    // Options to be passed to Jasmine-node.
    cucumberOpts: {
        // require step definitions
        require: [
            './stepDefinitions/*.js' // added *.js so both files are given path steps and timeout
        ]
    }

};