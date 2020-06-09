const webpack = require('webpack');
const path = require('path');

module.exports = {
    devtool: 'inline-source-map',
    resolve: {
        alias: {
            '@components': path.resolve(__dirname, './src/components'),
            '@layouts': path.resolve(__dirname, './src/layouts'),
            types: path.resolve(__dirname, './@types'),
        },
    },
    plugins: [
        new webpack.ProvidePlugin({
            BigNumber: 'bignumber.js',
            _: 'lodash',
        }),
    ],
};
