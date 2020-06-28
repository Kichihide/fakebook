import React, { FC } from 'react';
import ImageContainer from '@components/image';
import useLinks, { Links } from '@components/navigation/useLinks';
import { GatsbyImageSharpFluidFragment, JsonJsonLink } from 'types/graphql-types';
import {
    NavigationWrapper,
    Navigation,
    MenuArea,
    Menu,
    MenuItem,
    ContentsWrapper,
    ButtonArea,
    PrimaryButton,
    MessengerIcon,
    SocialIconArea,
    TwitterIcon,
    GitHubIcon,
} from './style';

interface ContainerProps {
    jsonJsonLink: JsonJsonLink;
    messengerIconImageFluid: GatsbyImageSharpFluidFragment;
    twitterIconFluid: GatsbyImageSharpFluidFragment;
    gitHubIconFluid: GatsbyImageSharpFluidFragment;
}

const NavigationContainer: FC<ContainerProps> = ({
    jsonJsonLink,
    messengerIconImageFluid,
    twitterIconFluid,
    gitHubIconFluid,
}) => {
    const [links] = useLinks(jsonJsonLink);

    if (!links) {
        // Todo: データ不備時の画面表示
        return null;
    }

    return (
        <NavigationComponent
            links={links}
            messengerIconImageFluid={messengerIconImageFluid}
            twitterIconFluid={twitterIconFluid}
            gitHubIconFluid={gitHubIconFluid}
        />
    );
};

interface NavigationProps {
    links: Links;
    messengerIconImageFluid: GatsbyImageSharpFluidFragment;
    twitterIconFluid: GatsbyImageSharpFluidFragment;
    gitHubIconFluid: GatsbyImageSharpFluidFragment;
}

const NavigationComponent: FC<NavigationProps> = ({
    links,
    messengerIconImageFluid,
    twitterIconFluid,
    gitHubIconFluid,
}) => {
    return (
        <NavigationWrapper>
            <Navigation>
                <MenuArea>
                    <Menu>
                        <MenuItem active={true} tabIndex={1}>
                            タイムライン
                        </MenuItem>
                        <MenuItem active={false} tabIndex={2}>
                            基本データ
                        </MenuItem>
                    </Menu>
                </MenuArea>
                <ContentsWrapper>
                    <ButtonArea>
                        <PrimaryButton tabIndex={3}>
                            <a href={links.messenger} target="_blank">
                                <MessengerIcon>
                                    <ImageContainer alt="messenger-icon" fluid={messengerIconImageFluid} />
                                </MessengerIcon>
                                <span>メッセージ</span>
                            </a>
                        </PrimaryButton>
                    </ButtonArea>
                    <SocialIconArea>
                        <TwitterIcon tabIndex={4}>
                            <a href={links.twitter} target="_blank">
                                <ImageContainer alt="twitter-icon" fluid={twitterIconFluid} />
                            </a>
                        </TwitterIcon>
                        <GitHubIcon tabIndex={5}>
                            <a href={links.github} target="_blank">
                                <ImageContainer alt="github-icon" fluid={gitHubIconFluid} />
                            </a>
                        </GitHubIcon>
                    </SocialIconArea>
                </ContentsWrapper>
            </Navigation>
        </NavigationWrapper>
    );
};

export default NavigationContainer;
