const webpackConfig = require('./webpack.config');
const { createFilePath } = require('gatsby-source-filesystem');
const _ = require('lodash');

require('ts-node').register({
    compilerOptions: {
        module: 'commonjs',
        target: 'esnext',
    },
});

/**
 * Gatsby API
 */
exports.onCreateWebpackConfig = ({ actions }) => {
    actions.setWebpackConfig(webpackConfig);
};

// Todo: ファイル複数指定対応(globの活用が候補)
exports.createPages = require('./gatsby-node/timelinePage').createPages;

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions;

    if (node.internal.type === 'MarkdownRemark') {
        const id = createFilePath({ node, getNode, basePath: 'pages' });
        const formattedId = id.replace(/\//g, '').replace(/_/g, '');
        const tags = (tagList) => {
            return tagList.map((tag, index) => {
                return { key: index, value: tag };
            });
        };

        createNodeField({ node, name: 'id', value: formattedId });
        _.forEach(node.frontmatter, (value, key) => {
            switch (key) {
                case 'tags':
                    createNodeField({ node, name: key, value: tags(value) });
                    break;

                default:
                    createNodeField({ node, name: key, value: value });
                    break;
            }
        });
    }
};
