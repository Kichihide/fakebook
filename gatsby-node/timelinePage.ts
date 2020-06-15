const query = `
     {
        siteConfigJson: jsonJson {
            siteConfig {
                siteTitle
                profile {
                    japanName
                    romanNotation
                    shortMessage
                }
            }
        }
        thumbnailImage: file(relativePath: { eq: "images/thumbnail.jpg" }) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        backgroundImage: file(relativePath: { eq: "images/profile_back.jpg" }) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        fakeBookLogoImage: file(relativePath: { eq: "images/fakebook_logo.png" }) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        twitterIconImage: file(relativePath: { eq: "images/social_Icon_Twitter.png" }) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        gitHubIconImage: file(relativePath: { eq: "images/social_Icon_GitHub.png" }) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        timelineData: allMarkdownRemark {
            edges {
                node {
                    frontmatter {
                        id
                        date
                        contributor
                        tags
                    }
                    html
                }
            }
        }
    }
`;