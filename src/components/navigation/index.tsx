import * as React from 'react';
import Image from '@components/image';
import { GatsbyImageSharpFluidFragment } from 'typesgraphql-types';
import {
    NavigationWrapper,
    NavigationContainer,
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

type Props = {
    messengerIconImageFluid: GatsbyImageSharpFluidFragment;
    twitterIconFluid: GatsbyImageSharpFluidFragment;
    gitHubIconFluid: GatsbyImageSharpFluidFragment;
};

const Navigation: React.FC<Props> = ({
    messengerIconImageFluid,
    twitterIconFluid,
    gitHubIconFluid,
}) => {
    return (
        <NavigationWrapper>
            <NavigationContainer>
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
                                <Image
                                    alt="messenger-icon"
                                    fluid={messengerIconImageFluid}
                                />
                            </MessengerIcon>
                            <span>メッセージ</span>
                        </PrimaryButton>
                    </ButtonArea>
                    <SocialIconArea>
                        <TwitterIcon>
                            <Image
                                alt="twitter-icon"
                                fluid={twitterIconFluid}
                            />
                        </TwitterIcon>
                        <GitHubIcon>
                            <Image alt="github-icon" fluid={gitHubIconFluid} />
                        </GitHubIcon>
                    </SocialIconArea>
                </ContentsWrapper>
            </NavigationContainer>
        </NavigationWrapper>
    );
};

export default Navigation;
