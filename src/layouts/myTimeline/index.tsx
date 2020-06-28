import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import HeaderContainer from '@components/header';
import HeroContainer from '@components/hero';
import NavigationContainer from '@components/navigation';
import PersonalInfoContainer from '@components/personalInfo';
import TimelineContainer from '@components/timeline';
import useMyTimeline, { MyTimelineData } from '@layouts/myTimeline/useMyTimeline';
import { ContentsArea, GlobalStyle, MyPageContainer } from '@styles/globalStyle';
import {
    JsonJsonSiteConfig,
    JsonJsonProfile,
    ImageSharpConnection,
    MarkdownRemarkConnection,
} from 'types/graphql-types';

interface ContainerProps {
    jsonJsonSiteConfig: JsonJsonSiteConfig;
    jsonJsonProfile: JsonJsonProfile;
    imageSharpConnection: ImageSharpConnection;
    markdownRemarkConnection: MarkdownRemarkConnection;
}

const MyTimelineLayoutContainer: FC<ContainerProps> = ({
    jsonJsonSiteConfig,
    jsonJsonProfile,
    imageSharpConnection,
    markdownRemarkConnection,
}) => {
    const [myTimelineProps] = useMyTimeline(
        jsonJsonSiteConfig,
        jsonJsonProfile,
        imageSharpConnection,
        markdownRemarkConnection
    );
    if (!myTimelineProps) {
        // Todo: データ不備時の画面表示
        return null;
    }
    return <MyTimelineLayout myTimelineData={myTimelineProps} />;
};

interface MyTimelineLayoutProps {
    myTimelineData: MyTimelineData;
}

const MyTimelineLayout: FC<MyTimelineLayoutProps> = ({ myTimelineData }) => {
    return (
        <MyPageContainer id="page">
            <GlobalStyle />
            <Helmet title={myTimelineData.siteTitle} />
            <HeaderContainer fakeBookLogoImageFluid={myTimelineData.fakeBookLogoImageFluid} />
            <HeroContainer
                jsonJsonProfile={myTimelineData.jsonJsonProfile}
                backgroundImageFluid={myTimelineData.backgroundImageFluid}
                thumbnailImageFluid={myTimelineData.thumbnailImageFluid}
            />
            <NavigationContainer
                messengerIconImageFluid={myTimelineData.messengerIconImageFluid}
                twitterIconFluid={myTimelineData.twitterIconFluid}
                gitHubIconFluid={myTimelineData.gitHubIconFluid}
            />
            <ContentsArea>
                <PersonalInfoContainer jsonJsonProfile={myTimelineData.jsonJsonProfile} />
                <TimelineContainer
                    postList={myTimelineData.markdownRemarkConnection.edges}
                    thumbnailImageFluid={myTimelineData.thumbnailImageFluid}
                />
            </ContentsArea>
        </MyPageContainer>
    );
};

export default MyTimelineLayoutContainer;
