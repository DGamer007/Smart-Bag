const { merge } = require('webpack-merge')
const common = require('./webpack.common')
const path = require('path')
const Dotenv = require('dotenv-webpack')
const os = require('os')

const port = 8080
const onNetwork = os.networkInterfaces()['Wi-Fi'][1].address

module.exports = merge(common, {
    mode: 'development',
    plugins: [
        new Dotenv({
            path: './.env.development'
        })
    ],
    devtool: 'inline-source-map',
    devServer: {
        noInfo: true,
        onListening() {
            console.log(`Local Connection: http://localhost:${port}`)
            console.log(`On your Network: http://${onNetwork}:${port}`)
        },
        contentBase: path.join(__dirname, 'public'),
        publicPath: '/dist/',
        host: '0.0.0.0',
        port,
        open: true,
        openPage: `http://localhost:${port}`,
        hot: true,
        historyApiFallback: true
    }
})