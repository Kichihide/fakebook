import React, { FC } from 'react';
import ImageContainer from '@components/image';
import useProfileData, { Profile } from '@components/hero/useProfileData';
import { GatsbyImageSharpFluidFragment, JsonJsonProfile } from 'types/graphql-types';
import {
    HeroWrapper,
    Hero,
    HeroImage,
    ImageWrapper,
    ThumbnailContainer,
    ThumbnailIconWrapper,
    ProfileArea,
    NameBox,
    JapanName,
    RomanNotation,
    Name,
    ShortMessage,
} from './style';

interface ContainerProps {
    jsonJsonProfile: JsonJsonProfile;
    backgroundImageFluid: GatsbyImageSharpFluidFragment;
    thumbnailImageFluid: GatsbyImageSharpFluidFragment;
}

const HeroContainer: FC<ContainerProps> = ({ jsonJsonProfile, backgroundImageFluid, thumbnailImageFluid }) => {
    const [profile] = useProfileData(jsonJsonProfile);

    if (!profile) {
        // Todo: データ不備時の画面表示
        return null;
    }

    return (
        <HeroComponent
            profile={profile}
            backgroundImageFluid={backgroundImageFluid}
            thumbnailImageFluid={thumbnailImageFluid}
        />
    );
};

interface HeroProps {
    profile: Profile;
    backgroundImageFluid: GatsbyImageSharpFluidFragment;
    thumbnailImageFluid: GatsbyImageSharpFluidFragment;
}

const HeroComponent: FC<HeroProps> = ({ profile, backgroundImageFluid, thumbnailImageFluid }) => {
    return (
        <HeroWrapper>
            <Hero>
                <HeroImage>
                    <ImageWrapper>
                        <ImageContainer alt="profile-back" fluid={backgroundImageFluid} />
                    </ImageWrapper>
                    <ThumbnailContainer>
                        <ThumbnailIconWrapper>
                            <ImageContainer alt="thumbnail" fluid={thumbnailImageFluid} />
                        </ThumbnailIconWrapper>
                    </ThumbnailContainer>
                </HeroImage>
                <ProfileArea>
                    <NameBox>
                        <JapanName>
                            <Name>{profile.name.lastName}</Name>
                            <Name>{profile.name.firstName}</Name>
                        </JapanName>
                        <RomanNotation>
                            <Name>{profile.romanNotation.lastName}</Name>
                            <Name>{profile.romanNotation.firstName}</Name>
                        </RomanNotation>
                    </NameBox>
                    <ShortMessage>{profile.shortMessage}</ShortMessage>
                </ProfileArea>
            </Hero>
        </HeroWrapper>
    );
};

export default HeroContainer;
