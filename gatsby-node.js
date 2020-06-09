const { createFilePath } = require(`gatsby-source-filesystem`);

'use strict';
require('ts-node').register({
  compilerOptions: {
    module: 'commonjs',
    target: 'esnext',
  },
});

// Todo: ファイル複数指定対応(globの活用が候補)
exports.createPages = require('./gatsby-node/timelinePage').createPages;

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` });
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }
};
