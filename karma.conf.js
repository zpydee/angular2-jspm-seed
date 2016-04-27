// Karma configuration
// Generated on Wed Mar 30 2016 13:59:14 GMT+0200 (SAST)

module.exports = function(config) {
    config.set({

        basePath: '',
        frameworks: ['jspm', 'jasmine'],
        // plugins: [
        //     'karma-jspm',
        //     'karma-chrome-launcher',
        //     'karma-jasmine'
        // ],
        files: [
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
                'app/**/*.spec.ts'
            ],
            stripExtension: false
        },
        exclude: [
        ],
        preprocessors: {
        },
        reporters: ['progress'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_WARN,
        autoWatch: true,
        browsers: ['Chrome'],
        singleRun: false,
        concurrency: Infinity
    })
}
