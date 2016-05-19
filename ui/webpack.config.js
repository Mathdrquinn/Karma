'use strict';

var webpack = require('webpack');
var path = require('path');

var APP = path.join(__dirname, 'app');

module.exports = {
    context: APP,
    entry: {
        app: [
            './index.js'
        ],
    },
    plugins: [],
    output: {
        path: './dist',
        filename: 'bundle.js',
        hash: true
    },
    module: {
        preloaders: [],
        loaders: [
            {test: /\.html$/, loaders: ["raw"]},
            {test: /\.css$/, loaders: ["style", "css"]},
            {test: /\.scss$/, loaders: ["style", "css", "sass"]},
            {
                test: /\.js$/,
                exclude: [
                    /(node_modules|bower_components)/,
                    /\.spec\.js$/
                ],
                loader: 'ng-annotate!babel?presets[]=es2015',
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "file-loader"
            },
            { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "file-loader"
            }
        ]
    },
    sassLoader: {
        includePaths: [path.resolve(__dirname, "./node_modules")]
    }
}
