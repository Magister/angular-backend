// Karma configuration
// Generated on Wed Feb 25 2015 22:54:39 GMT+0200 (EET)

module.exports = function(config) {
  function getFiles() {
    var fs = require('fs'),
        path = require('path');
    var files = [];
    var bower_dir = './bower_components';
    var bowerComponents = fs.readdirSync(bower_dir);
    for (var i = 0; i < bowerComponents.length; i++) {
        var prefix = path.join(bower_dir, bowerComponents[i]);
        if (fs.existsSync(path.join(prefix, 'bower.json'))) {
            var bower_js = require('./' + path.join(prefix, 'bower.json'));
            if (path.extname(bower_js.main).toLowerCase() === '.js') {
                var component_files = [].concat(bower_js.main);
                for (var j = 0; j < component_files.length; j++) {
                    files.push(path.normalize(path.join(prefix, component_files[j])));
                }
            }
        }
    }
    files = files.concat([
      'js/*.js',
      'js/**/*.js'
    ]);
    console.log(files);
    return files;
  }

  config.set({
    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: getFiles(),

    // list of files to exclude
    exclude: [
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};
