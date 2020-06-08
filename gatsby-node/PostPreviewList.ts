const query = `
{
  site {
    siteMetadata {
      title
    }
  }
  allMarkdownRemark {
    edges {
      node {
        id
        fields {
          slug
        }
        html
        frontmatter {
          tags
          title
          description
          date
        }
      }
    }
    totalCount
  }
  allJsonJson {
    edges {
      node {
        userName
      }
    }
  }
}
`;