'use strict'

process.env.BABEL_ENV = 'main';

const path = require('path');
const glob = require('glob');
const webpack = require('webpack');
const BabelMinifyWebpackPlugin = require('babel-minify-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');


function filterEntries(root, filter) {
    let files = glob.sync(path.resolve(root, filter));
    let prefix = root.replace(/\\/g, '/');
    let entries = {};
    files.forEach((file) => {
        let name = path.dirname(file);
        name = name.replace(prefix+'/', '');
        entries[name] = file;
    });
    return entries;
}

const PAGESDIR = path.resolve(__dirname, '../src/renderer/pages/');
let htmlTemplates = filterEntries(PAGESDIR, '**/*.ejs');
let rendererEntries = (entries => {
    let all = {}
    for (let name in entries) {
        all[name] = entries[name].replace(/\.ejs$/, '.js');
    }
    return all;
})(htmlTemplates);

const htmlPages = function(env) {  
    let pages = [];
    for (let name in htmlTemplates) {
        let conf = {
            title: name,
            filename: name+'.html',
            template: htmlTemplates[name],
            chunks: [name],
            minify: {
              collapseWhitespace: true,
              removeAttributeQuotes: true,
              removeComments: true
            },
            nodeModules: env !== 'production'
              ? path.resolve(__dirname, '../node_modules')
              : false
        }
        if (name.endsWith('.dev') && env === 'production')
            continue;
        pages.push(new HtmlWebpackPlugin(conf));
    }
    return pages;
};


const rendererConfig = {
    entry: rendererEntries,
    externals: [
    ],
    output: {
        path: path.join(__dirname, '../build/pages'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {test: /\.js$/, use: 'babel-loader'},
            {test: /\.vue$/, use: 'vue-loader'},
            {test: /\.(css|s[a|c]ss|less)$/, use: ['style-loader', 'css-loader', 'sass-loader', 'scss-loader', 'less-loader']},
            {test: /\.(ico|png|jpe?g|gif|svg)$/, use: 'url-loader'},
            {test: /\.html?$/, use: 'html-loader'}
        ]
    },
    resolve: {
        extensions: ['.js', '.vue', '.json', '.css', '.sass', '.scss', '.less'],
        alias: {
            '@': path.join(__dirname, '../src/renderer'),
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    plugins: [
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({filename: 'styles.css'})
    ],
    target: 'electron-renderer'
}

module.exports = (env) => {
    rendererConfig.mode = env;
    rendererConfig.plugins = rendererConfig.plugins.concat(htmlPages(env));
    if (env === 'development') {
        rendererConfig.plugins.push(
            new webpack.DefinePlugin({
                '__static': `${path.join(__dirname, '../static').replace(/\\/g, '\\\\')}`
            }),
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NoEmitOnErrorsPlugin()
        );
    } else {
        rendererConfig.plugins.push(
            new BabelMinifyWebpackPlugin(),
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': '"production"'
            }),
            new CopyWebpackPlugin([
                {
                    from: path.join(__dirname, '../static'),
                    to: path.join(__dirname, '../build/static'),
                    ignore: ['.*']
                }
            ]),
            new webpack.LoaderOptionsPlugin({
                minimize: true
            })
        );   
    }

  return rendererConfig;
};

