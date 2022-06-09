const fs = require('fs');
const { DefinePlugin } = require('webpack');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const { pathFromRoot } = require('./utils');
const { manifest, output } = require('./settings');

const publicPath = 'https://localhost:8080/';

module.exports = {
    mode: 'development',
    entry: {
        application: pathFromRoot(['app-frontend/packs/application.js'])
    },
    output: {
        pathinfo: true,
        path: output,
        publicPath,
        hotUpdateChunkFilename: 'hot/[id].[fullhash].hot-update.js',
        hotUpdateMainFilename: 'hot/[fullhash].hot-update.json',
        assetModuleFilename: '[name][ext][query]'
    },
    devServer: {
        host: process.env.WEBPACK_HOST || 'localhost',
        port: 8080,
        hot: true,
        devMiddleware: {
            stats: { colors: true }
        },
        client: {
            logging: 'none',
            overlay: {
                warnings: true,
                errors: true
            },
            webSocketURL: 'wss://localhost:8080/ws'
        },
        server: {
            type: 'https',
            options: {
                key: fs.readFileSync('config/webpack/ssl/server.key', 'utf8'),
                cert: fs.readFileSync('config/webpack/ssl/server.crt', 'utf8'),
                ca: fs.readFileSync('config/webpack/ssl/ca.pem', 'utf8'),
                passphrase: 'test'
            }
        },
        allowedHosts: 'all',
        historyApiFallback: true,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
        }
    },
    module: {
        rules: [
            {
                test: /\.(gif|svg|png|jpe?g)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            esModule: false
                        }
                    }
                ]
            },
            {
                test: /\.js$/,
                include: [pathFromRoot(['app-frontend'])],
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: { cacheDirectory: true }
                }
            },
            {
                test: /\.s?css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: { sourceMap: true }
                    },
                    {
                        loader: 'postcss-loader'
                    },
                    'resolve-url-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                            implementation: require('sass')
                        }
                    }
                ]
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.vue', '.css', '.scss', '.svg', '.png', '.jpg', '.json', '.html'],
        modules: [pathFromRoot(['app-frontend/packs']), 'node_modules']
    },
    stats: { errorDetails: true },
    watchOptions: { aggregateTimeout: 100 },
    devtool: 'eval-cheap-module-source-map',
    plugins: [
        new MiniCssExtractPlugin(),
        new VueLoaderPlugin(),
        new WebpackManifestPlugin({
            fileName: manifest,
            publicPath,
            writeToFileEmit: true
        }),
        new DefinePlugin({
            'process.env': JSON.stringify({ ...process.env }),
            __VUE_OPTIONS_API__: true,
            __VUE_PROD_DEVTOOLS__: false
        })
    ]
};
