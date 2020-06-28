import React, { FC, ComponentProps } from 'react';
import ImageContainer from '@components/image';
import { GatsbyImageSharpFluidFragment } from 'types/graphql-types';
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

type ContainerProps = ComponentProps<typeof NavigationComponent>;

const NavigationContainer: FC<ContainerProps> = (props: ContainerProps) => {
    return <NavigationComponent {...props} />;
};

interface NavigationProps {
    messengerIconImageFluid: GatsbyImageSharpFluidFragment;
    twitterIconFluid: GatsbyImageSharpFluidFragment;
    gitHubIconFluid: GatsbyImageSharpFluidFragment;
}

const NavigationComponent: FC<NavigationProps> = ({ messengerIconImageFluid, twitterIconFluid, gitHubIconFluid }) => {
    return (
        <NavigationWrapper>
            <Navigation>
                <MenuArea>
                    <Menu>
                        <MenuItem active={true}>タイムライン</MenuItem>
                        <MenuItem active={false}>基本データ</MenuItem>
                    </Menu>
                </MenuArea>
                <ContentsWrapper>
                    <ButtonArea>
                        <PrimaryButton>
                            <MessengerIcon>
                                <ImageContainer alt="messenger-icon" fluid={messengerIconImageFluid} />
                            </MessengerIcon>
                            <span>メッセージ</span>
                        </PrimaryButton>
                    </ButtonArea>
                    <SocialIconArea>
                        <TwitterIcon>
                            <ImageContainer alt="twitter-icon" fluid={twitterIconFluid} />
                        </TwitterIcon>
                        <GitHubIcon>
                            <ImageContainer alt="github-icon" fluid={gitHubIconFluid} />
                        </GitHubIcon>
                    </SocialIconArea>
                </ContentsWrapper>
            </Navigation>
        </NavigationWrapper>
    );
};

export default NavigationContainer;
