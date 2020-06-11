import * as React from 'react';
import { graphql } from 'gatsby';
import {
    GatsbyImageSharpFluidFragment,
    TimelinePageQuery,
} from 'types/graphql-types';
import Layouts from '@layouts/timeline';
import ProfileTiles from '@components/profileTile';
import PostPreview from '@components/postPreview';

type Props = {
    data: TimelinePageQuery;
};

const TimelinePage: React.FC<Props> = ({ data }) => {
    const {
        fLogoImage,
        profileBackImage,
        siteMetadataJson,
        thumbnailImage,
        timelineData,
    } = data;

    if (checkHasAllData(data)) {
        // Todo: データ不足時の画面表示（ありえない想定）
        return null;
    }

    const fLogoImageFluid = getImageFluid(fLogoImage);
    const profileBackImageFluid = getImageFluid(profileBackImage);
    const thumbnailImageFluid = getImageFluid(thumbnailImage);

    const postList = timelineData.edges.sort((a, b) => {
        return a < b ? 1 : -1;
    });

    return (
        <Layouts
            title={siteMetadataJson?.siteMetadata?.title}
            fLogoImageFluid={fLogoImageFluid}
        >
            <ProfileTiles
                profileBackImageFluid={profileBackImageFluid}
                thumbnailImageFluid={thumbnailImageFluid}
            />
            <section>
                {(() => {
                    return postList.map((edge: any) => {
                        const { frontmatter, html } = edge.node;
                        return (
                            <PostPreview
                                key={frontmatter.id}
                                userName={'鵜木 義秀'} // Todo: 定義場所の検討
                                fields={frontmatter}
                                html={html}
                                thumbnailImageFluid={thumbnailImageFluid}
                            />
                        );
                    });
                })()}
            </section>
        </Layouts>
    );
};

function checkHasAllData(dataObj: {}): boolean {
    return !_.every(dataObj, (data: any) => {
        return data;
    });
}

function getImageFluid(imageData: any): GatsbyImageSharpFluidFragment {
    return imageData?.childImageSharp?.fluid;
}

export const pageQuery = graphql`
    query timelinePage {
        siteMetadataJson: jsonJson {
            siteMetadata {
                title
            }
        }
        thumbnailImage: file(relativePath: { eq: "images/thumbnail.jpg" }) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        profileBackImage: file(
            relativePath: { eq: "images/profile_back.jpg" }
        ) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        fLogoImage: file(relativePath: { eq: "images/f_logo.png" }) {
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
                        tags
                    }
                    html
                }
            }
        }
    }
`;

export default TimelinePage;
