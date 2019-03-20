const path = require('path');

module.exports = {
    entry: './js/src/index.js',
    output: {
        path: path.join(__dirname, 'js/dist/'),
        filename: 'script.js'
    },
    mode: process.env.NODE_ENV || 'production',
    devtool: 'source-map',
    module: {
        rules: [
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/, query: { presets: ['@babel/env'] } },
            { test: /.sass$/, use: ['style-loader', 'css-loader', 'sass-loader'] }
        ]
    }
}