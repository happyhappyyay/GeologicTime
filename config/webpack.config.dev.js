const path = require('path');
const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = () => {    
    
    const config = Object.assign({},require('./common.config'));

    config.mode = 'development';

    config.module.rules[0].use = [
        {
            loader: 'babel-loader',
            options: {
                plugins: [
                    require.resolve('react-refresh/babel')
                ]
            }
        }
    ]

    config.module.rules[1].use = [
        "style-loader",...config.module.rules[1].use
    ]
    
    config.module.rules[2].use = [
        "style-loader",...config.module.rules[2].use
    ]
    
    config.plugins = [...config.plugins, 
        new ReactRefreshPlugin()
    ];
    
    config.devServer =  {
        static: path.resolve(__dirname,"../dist"),
        hot: true,
        open: true
    }
    return config; 
}