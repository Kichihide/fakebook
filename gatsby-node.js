const { createFilePath } = require(`gatsby-source-filesystem`);

'use strict';
require('ts-node').register({
  compilerOptions: {
    module: 'commonjs',
    target: 'esnext',
  },
});
exports.createPages = require('./gatsby-node/PostPreviewList').createPages;

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` });
      node,
      name: `slug`,
      value: slug,
    });
  }
};
