const env = require('dotenv').config({path: __dirname + '/.env'}).parsed
const path = require('path')

const BrowserSyncPlugin = require('browser-sync-webpack-plugin')
const CleanTerminalPlugin = require('clean-terminal-webpack-plugin')

module.exports = {
    entry: {
        app: [path.resolve(__dirname, 'resources/ts/app.ts')]
    },
    output: {
        filename: 'js/[name].js',
        path: path.resolve(__dirname, 'public'),
        pathinfo: false,
        publicPath: '/',
        chunkFilename: 'js/[name].js'
    },
    devtool: 'eval-source-map',
    resolve: {
        alias: {
            ts: path.resolve(__dirname, 'resources/ts/'),
        },
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [{
            test: /\.ts$/,
            loader: 'ts-loader',
            exclude: /node_modules/
        }, {
            enforce: 'pre',
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'eslint-loader'
        }]
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                default: false,
                vendors: {
                    chunks: 'initial',
                    name: 'vendor'
                }
            }
        }
    },
    plugins: [
        new CleanTerminalPlugin(),
        new BrowserSyncPlugin({
            port: env.BROWSERSYNC_PORT,
            proxy: `${env.NGINX_PROXY}:${env.NGINX_HTTP_PORT}`,
            open: ('true' === env.BROWSERSYNC_OPEN)
        })
    ]
}
