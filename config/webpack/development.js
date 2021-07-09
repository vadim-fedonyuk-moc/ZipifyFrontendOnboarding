const { HotModuleReplacementPlugin } = require('webpack');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const { pathFromRoot, readSslKey } = require('./utils');
const { manifest, output } = require('./settings');

const publicPath = 'https://localhost:8080/';

module.exports = {
    mode: 'development',
    entry: {
        application: pathFromRoot(['app-frontend/packs/application.js'])
    },
    output: {
        pathinfo: true,
        filename: '[name].js',
        path: output,
        publicPath,
        hotUpdateChunkFilename: 'hot/[id].[fullhash].hot-update.js',
        hotUpdateMainFilename: 'hot/[fullhash].hot-update.json'
    },
    devServer: {
        host: process.env.WEBPACK_HOST || 'localhost',
        port: 8080,
        https: {
            key: readSslKey('key'),
            cert: readSslKey('crt'),
            ca: readSslKey('pem')
        },
        compress: true,
        inline: true,
        hot: true,
        overlay: {
            warnings: true,
            errors: true
        },
        clientLogLevel: 'none',
        disableHostCheck: true,
        historyApiFallback: true,
        stats: {
            colors: true,
            children: false
        },
        public: publicPath,
        contentBase: pathFromRoot(['public/assets']),
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
                    options: {cacheDirectory: true}
                }
            },
            {
                test: /\.s?css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {sourceMap: true}
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
        new HotModuleReplacementPlugin(),
        new WebpackManifestPlugin({
            fileName: manifest,
            publicPath,
            writeToFileEmit: true
        })
    ]
};
