const webpack = require('webpack')

module.exports = function(config) {
    config.set({
        browsers: ['Chrome'],
        singleRun: true,
        frameworks: ['mocha', 'sinon'],
        files: [
            'tests.webpack.js'
        ],
        plugins: [
            'karma-chrome-launcher',
            'karma-chai',
            'karma-mocha',
            'karma-sinon',
            'karma-sourcemap-loader',
            'karma-webpack',
            'karma-mocha-reporter',
            'karma-coverage'
        ],
        preprocessors: {
            'tests.webpack.js': ['webpack', 'sourcemap']
        },
        reporters: ['mocha', 'coverage'],
        webpack: {
            devtool: 'eval-source-map',
            isparta: {
                embedSource: true,
                noAutoWrap: true,
                babel: {
                    presets: ['es2015', 'stage-0', 'react']
                }
            },
            module: {
                loaders: [
                    {
                        test: /\.js$/,
                        loader: 'babel-loader?plugins=rewire',
                        exclude: /node_modules/,
                    }
                ],
                preLoaders: [
                    {
                        test: /\.js$/,
                        loader: 'isparta',
                        exclude: /(\_\_tests\_\_|node_modules)\//
                    }
                ]
            },
            externals: {
                'cheerio': 'window',
                'react/addons': true,
                'react/lib/ExecutionEnvironment': true,
                'react/lib/ReactContext': true
            }
        },
        webpackServer: {
            noInfo: true
        },
        coverageReporter: {
            type: 'html',
            dir: './coverage'
        }
    })
}
