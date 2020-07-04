import React, { FC } from 'react';
import { graphql } from 'gatsby';
import { TimelinePageQuery } from 'types/graphql-types';
import { isJsonJsonSiteConfig, isJsonJsonLink, isJsonJsonProfile } from '@commons/typeUtils/jsonConnection/typeGuard';
import { isImageSharpConnection } from '@commons/typeUtils/imageConnection/typeGuard';
import { isMarkdownRemarkConnection } from '@commons/typeUtils/markdownRemarkConnection/typeGuard';
import MyTimelineLayoutContainer from '@layouts/myTimeline';

interface Props {
    data: TimelinePageQuery;
}

const Components: FC<Props> = ({ data }) => {
    const { siteConfigJson, allImageSharp, allMarkdownRemark } = data;

    if (
        !siteConfigJson ||
        !isJsonJsonSiteConfig(siteConfigJson.siteConfig) ||
        !isJsonJsonLink(siteConfigJson.link) ||
        !isJsonJsonProfile(siteConfigJson.profile) ||
        !isImageSharpConnection(allImageSharp) ||
        !isMarkdownRemarkConnection(allMarkdownRemark)
    ) {
        // Todo: データ不備時の画面表示
        return null;
    }
    return (
        <MyTimelineLayoutContainer
            jsonJsonSiteConfig={siteConfigJson.siteConfig}
            jsonJsonLink={siteConfigJson.link}
            jsonJsonProfile={siteConfigJson.profile}
            imageSharpConnection={allImageSharp}
            markdownRemarkConnection={allMarkdownRemark}
        />
    );
};

export default Components;

export const pageQuery = graphql`
    query timelinePage {
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
