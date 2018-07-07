/* eslint-disable */
const path = require('path');
const common = require('./common');
const webpack = require('webpack');

const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// noinspection JSUnresolvedFunction
module.exports = {
    entry: {
        index: './src/index.ts',
    },
    output: {
        filename: '[name].bundle.js',
        path: common.outputDirectory,
    },
    resolve: {
        extensions: ['.ts', '.js', '.vue', '.json'],
        modules: ['node_modules', 'src'],
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.css$/,
                loader: [
                    'vue-style-loader',
                    'css-loader',
                ],
            },
            {
                test: /\.scss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader',
                ]
            },
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
                options: {
                    appendTsSuffixTo: [/\.vue$/],
                },
            },
            {
                // for semantic-ui configuration
                test: /\.(eot|svg|ttf|woff|woff2|png)$/,
                loader: 'file-loader?name=semantic/dist/themes/default/assets/fonts/[name].[ext]'
            }
        ],
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html',
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        })
    ],
};
