const webpack = require('webpack');
const path = require('path');

module.exports = {
    devtool: 'inline-source-map',
    resolve: {
        alias: {
            '@components': path.resolve(__dirname, './src/components'),
            '@commons': path.resolve(__dirname, './src/commons'),
            '@layouts': path.resolve(__dirname, './src/layouts'),
            '@styles': path.resolve(__dirname, './src/styles'),
            types: path.resolve(__dirname, './graphql-types'),
        },
    },
    plugins: [
        new webpack.ProvidePlugin({
            _: 'lodash',
        }),
    ],
};
