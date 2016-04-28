// Karma configuration
// Generated on Wed Mar 30 2016 13:59:14 GMT+0200 (SAST)

module.exports = function (config) {
    config.set({

        basePath: '',
        frameworks: ['jspm', 'jasmine'],
        // plugins: [
        //     'karma-jspm',
        //     'karma-chrome-launcher',
        //     'karma-jasmine'
        // ],
        files: [
            "node_modules/angular2/bundles/angular2-polyfills.min.js"
        ],
        proxies: {
            "/tsconfig.json": "/base/tsconfig.json",
            "/jspm_packages": "/base/jspm_packages",
            "/app": "/base/app"
        },
        jspm: {
            serveFiles: [
                'app/**/*.ts'
            ],
            loadFiles: [
                'app/**/*_spec.ts'
            ],
            stripExtension: false
        },
        exclude: [
        ],
        preprocessors: {
        },
        browsers: ['Chrome'],
        reporters: ['progress'],
        port: 9876,
        logLevel: config.LOG_ERROR,
        colors: true,
        autoWatch: true,
        singleRun: false,
        concurrency: Infinity
    })
}
