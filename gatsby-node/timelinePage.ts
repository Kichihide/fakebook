const query = `
    {
        siteConfigJson: jsonJson {
            siteConfig {
                siteTitle
            }
            profile {
                name {
                    firstName
                    lastName
                }
                romanNotation {
                    firstName
                    lastName
                }
                shortMessage
                work {
                    index
                    company
                    job
                    term {
                        from {
                            month
                            year
                        }
                    }
                }
                privateActivities {
                    index
                    company
                    job
                    term {
                        from {
                            month
                            year
                        }
                    }
                }
                workHistory {
                    index
                    company
                    job
                    term {
                        from {
                            month
                            year
                        }
                        to {
                            month
                            year
                        }
                    }
                }
                address {
                    city
                    prefectures
                }
                homeTown {
                    city
                    prefectures
                }
                marriage
            }
        }
        allImageSharp {
            edges {
                node {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
        allMarkdownRemark {
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