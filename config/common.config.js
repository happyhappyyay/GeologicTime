const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: path.resolve(__dirname, "../src", "index.js")
    },
    module: {
        rules: [
            {
                test: /(\.jsx?)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /(\.module.css)$/,
                use:[{
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            modules: true
                        }
                    }
                ]
            },
            {
                test: /(\.css)$/,
                exclude: /(\.module.css)$/,
                use: ["css-loader"]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "../public", "index.html")
        })
    ]
}