const { merge } = require('webpack-merge')
const common = require('./webpack.common')
const path = require('path')
const Dotenv = require('dotenv-webpack')

module.exports = merge(common, {
    mode: 'development',
    plugins: [
        new Dotenv({
            path: './.env.development'
        })
    ],
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        publicPath: '/dist/',
        historyApiFallback: true
    }
})