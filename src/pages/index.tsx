import * as React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import Header from '@components/header';
import Hero from '@components/hero';
import Navigation from '@components/navigation';
import PersonalInfo from '@components/personalInfo';
import Timeline from '@components/timeline';
import {
    GatsbyImageSharpFluidFragment,
    TimelinePageQuery,
} from 'types/graphql-types';
import { GlobalStyle, MyPageContainer, ContentsArea } from './style';

function checkHasAllData(dataObj: {}): boolean {
    return !_.every(dataObj, (data: any) => {
        return data;
    });
}

function getImageFluid(imageData: any): GatsbyImageSharpFluidFragment {
    return imageData?.childImageSharp?.fluid;
}

type Props = {
    data: TimelinePageQuery;
};

const MyPage: React.FC<Props> = ({ data }) => {
    const {
        fakeBookLogoImage,
        messengerIconImage,
        twitterIconImage,
        gitHubIconImage,
        backgroundImage,
        siteConfigJson,
        thumbnailImage,
        timelineData,
    } = data;

    if (checkHasAllData(data)) {
        // Todo: データ不足時の画面表示（ありえない想定）
        return null;
    }

    const fakeBookLogoImageFluid = getImageFluid(fakeBookLogoImage);
    const messengerIconImageFluid = getImageFluid(messengerIconImage);
    const twitterIconFluid = getImageFluid(twitterIconImage);
    const gitHubIconFluid = getImageFluid(gitHubIconImage);
    const backgroundImageFluid = getImageFluid(backgroundImage);
    const thumbnailImageFluid = getImageFluid(thumbnailImage);

    return (
        <React.Fragment>
            <GlobalStyle />
            <MyPageContainer id="page">
                {(() => {
                    if (siteConfigJson?.siteConfig?.siteTitle) {
                        return (
                            <Helmet
                                title={siteConfigJson?.siteConfig?.siteTitle}
                            />
                        );
                    }
                })()}
                <Header fakeBookLogoImageFluid={fakeBookLogoImageFluid} />
                <Hero
                    profileData={siteConfigJson?.siteConfig?.profile}
                    backgroundImageFluid={backgroundImageFluid}
                    thumbnailImageFluid={thumbnailImageFluid}
                />
                <Navigation
                    messengerIconImageFluid={messengerIconImageFluid}
                    twitterIconFluid={twitterIconFluid}
                    gitHubIconFluid={gitHubIconFluid}
                />
                <ContentsArea>
                    <PersonalInfo />
                    <Timeline
                        postList={timelineData.edges}
                        thumbnailImageFluid={thumbnailImageFluid}
                    />
                </ContentsArea>
            </MyPageContainer>
        </React.Fragment>
    );
};

export default MyPage;

export const pageQuery = graphql`
    query timelinePage {
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
        fakeBookLogoImage: file(
            relativePath: { eq: "images/fakebook_logo.png" }
        ) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        messengerIconImage: file(
            relativePath: { eq: "images/icon_Messenger.png" }
        ) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        twitterIconImage: file(
            relativePath: { eq: "images/social_Icon_Twitter.png" }
        ) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        gitHubIconImage: file(
            relativePath: { eq: "images/social_Icon_GitHub.png" }
        ) {
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
