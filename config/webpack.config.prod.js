const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = () => {

    const config = Object.assign({},require('./common.config'));
    
    config.mode = 'production';

    config.output = {
        path: path.resolve(__dirname, '../dist')
    }

    config.plugins = [...config.plugins, new CleanWebpackPlugin(), new MiniCssExtractPlugin()];

    config.optimization = {
        splitChunks: {
            chunks: 'all'
        }
    }
    
    config.module.rules[1].use = [
        MiniCssExtractPlugin.loader,...config.module.rules[1].use
    ]

    config.module.rules[2].use = [
        MiniCssExtractPlugin.loader,...config.module.rules[2].use
    ]

    return config;
}