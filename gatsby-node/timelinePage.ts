const query = `
{
  siteMetadataJson: jsonJson {
    siteMetadata {
      title
    }
  }
  thumbnailImage: file(relativePath: {eq: "images/thumbnail.jpg"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
  profileBackImage: file(relativePath: {eq: "images/profile_back.jpg"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
  fLogoImage: file(relativePath: {eq: "images/f_logo.png"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
  timelineData: allMarkdownRemark {
    edges {
      node {
        id
        html
        fields {
          slug
        }
        frontmatter {
          tags
          title
          description
          date
        }
      }
    }
  }
}
`;