/* eslint-disable */
const path = require('path');
const common = require('./common');

const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
                    {
                        loader: 'sass-loader',
                        options: {
                            data: "@import 'global-imports.scss';",
                            includePaths: [path.resolve(__dirname, '../src/style/')],
                        }
                    }
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
        ],
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html',
        }),
    ],
};
