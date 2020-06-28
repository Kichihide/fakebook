import { getGatsbyImageSharpFluidFragment } from '@commons/typeUtils/imageConnection/imageUtils';
import {
    GatsbyImageSharpFluidFragment,
    ImageSharpConnection,
    JsonJsonProfile,
    JsonJsonLink,
    JsonJsonSiteConfig,
    MarkdownRemarkConnection,
} from 'types/graphql-types';

export interface MyTimelineData {
    siteTitle: string;
    jsonJsonLink: JsonJsonLink;
    jsonJsonProfile: JsonJsonProfile;
    fakeBookLogoImageFluid: GatsbyImageSharpFluidFragment;
    backgroundImageFluid: GatsbyImageSharpFluidFragment;
    thumbnailImageFluid: GatsbyImageSharpFluidFragment;
    messengerIconImageFluid: GatsbyImageSharpFluidFragment;
    twitterIconFluid: GatsbyImageSharpFluidFragment;
    gitHubIconFluid: GatsbyImageSharpFluidFragment;
    markdownRemarkConnection: MarkdownRemarkConnection;
}

const useMyTimeline = (
    jsonJsonSiteConfig: JsonJsonSiteConfig,
    jsonJsonLink: JsonJsonLink,
    jsonJsonProfile: JsonJsonProfile,
    imageSharpConnection: ImageSharpConnection,
    markdownRemarkConnection: MarkdownRemarkConnection
): [MyTimelineData] | [undefined] => {
    const fakeBookLogoImageFluid = getGatsbyImageSharpFluidFragment(imageSharpConnection.edges, 'fakebook_logo.png');
    const backgroundImageFluid = getGatsbyImageSharpFluidFragment(imageSharpConnection.edges, 'profile_back.jpg');
    const thumbnailImageFluid = getGatsbyImageSharpFluidFragment(imageSharpConnection.edges, 'thumbnail.jpg');
    const messengerIconImageFluid = getGatsbyImageSharpFluidFragment(imageSharpConnection.edges, 'icon_Messenger.png');
    const twitterIconFluid = getGatsbyImageSharpFluidFragment(imageSharpConnection.edges, 'social_Icon_Twitter.png');
    const gitHubIconFluid = getGatsbyImageSharpFluidFragment(imageSharpConnection.edges, 'social_Icon_GitHub.png');

    if (
        !jsonJsonSiteConfig.siteTitle ||
        !fakeBookLogoImageFluid ||
        !backgroundImageFluid ||
        !thumbnailImageFluid ||
        !messengerIconImageFluid ||
        !twitterIconFluid ||
        !gitHubIconFluid
    ) {
        return [undefined];
    }

    return [
        {
            siteTitle: jsonJsonSiteConfig.siteTitle,
            jsonJsonLink: jsonJsonLink,
            jsonJsonProfile: jsonJsonProfile,
            fakeBookLogoImageFluid: fakeBookLogoImageFluid,
            backgroundImageFluid: backgroundImageFluid,
            thumbnailImageFluid: thumbnailImageFluid,
            messengerIconImageFluid: messengerIconImageFluid,
            twitterIconFluid: twitterIconFluid,
            gitHubIconFluid: gitHubIconFluid,
            markdownRemarkConnection: markdownRemarkConnection,
        },
    ];
};

export default useMyTimeline;
