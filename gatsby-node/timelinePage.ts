const query = `
    {
        siteConfigJson: jsonJson {
            siteConfig {
                siteTitle
            }
            link {
                github
                messenger
                twitter
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
                    fields {
                        id
                        date
                        contributor
                        job
                        place
                        category
                        tags {
                            key
                            value
                        }
                    }
                    html
                }
            }
        }
    }
`;