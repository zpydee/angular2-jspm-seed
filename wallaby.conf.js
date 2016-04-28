module.exports = function (wallaby) {

    return {
        files: [
            { pattern: 'node_modules/phantomjs-polyfill/bind-polyfill.js', instrument: false },
            { pattern: 'node_modules/es6-shim/es6-shim.js', instrument: false },
            { pattern: 'jspm_packages/system.js', instrument: false },
            { pattern: 'node_modules/reflect-metadata/Reflect.js', instrument: false },
            { pattern: 'system.conf.js', instrument: false },
            { pattern: 'app/**/*.ts', load: false },
            { pattern: 'app/**/*.html', load: false },
            { pattern: 'app/**/*_spec.ts', ignore: true }
        ],

        tests: [
            { pattern: 'app/**/*_spec.ts', load: false }
        ],

        compilers: {
            '**/*.ts': wallaby.compilers.typeScript({
                emitDecoratorMetadata: true,
                experimentalDecorators: true,
                module: 4
            })
        },

        middleware: (app, express) => {
            app.use('/jspm_packages',
                express.static(
                    require('path').join(__dirname, 'jspm_packages')));
        },

        bootstrap: function (wallaby) {
            wallaby.delayStart();

            System.config({
                packages: {
                    'app': {
                        defaultExtension: 'js'
                    }
                }
                // `scriptLoad: true` needs to be used for inline error messages,
                // but `scriptLoad: true` for 'app/*' breaks loading html.
                // so somehow `scriptLoad: false` needs to be set for html, not sure how to do it (tried 'app/*.html' - no luck)
                ,
                meta: {
                  'app/*_spec.js': {
                    scriptLoad: true
                  }
                }
            });

            var promises = [];
            for (var i = 0, len = wallaby.tests.length; i < len; i++) {
                promises.push(System['import'](wallaby.tests[i].replace(/\.js$/, '')));
            }

            Promise.all(promises).then(function () {
                wallaby.start();
            });
        }
    };
};