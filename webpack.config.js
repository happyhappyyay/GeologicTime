const path = require('path');

module.exports = (env) =>
    require(`./config/webpack.config.${env.NODE_ENV}.js`)();