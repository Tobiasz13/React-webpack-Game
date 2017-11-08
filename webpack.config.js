const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const OptimizeJsPlugin =require('optimize-js-plugin');
const env = process.env.NODE_ENV || 'development'

config = {
    entry: [
        "react-hot-loader/patch",
        './client/index.js'
    ],
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'public'),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                loader: "babel-loader"
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: './client/index.html',
            filename: 'index.html',
            inject: 'body'
        })
    ]
};

if(env === 'production') {
    config.plugins.push(
        new webpack.optimize.UglifyJsPlugin(),
        new OptimizeJsPlugin({
            sourceMap: false
        })
    );
}
module.exports = config
