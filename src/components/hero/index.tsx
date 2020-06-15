import * as React from 'react';
import Image from '@components/image';
import {
    GatsbyImageSharpFluidFragment,
    JsonJsonSiteConfigProfile,
} from 'types/graphql-types';
import {
    HeroWrapper,
    HeroContainer,
    HeroImage,
    ImageWrapper,
    ThumbnailContainer,
    ThumbnailIconWrapper,
    ProfileArea,
    Name,
    JapanName,
    RomanNotation,
    ShortMessage,
} from './style';

type Props = {
    profileData?: JsonJsonSiteConfigProfile | null;
    backgroundImageFluid: GatsbyImageSharpFluidFragment;
    thumbnailImageFluid: GatsbyImageSharpFluidFragment;
};

const Hero: React.FC<Props> = ({
    profileData,
    backgroundImageFluid,
    thumbnailImageFluid,
}) => {
    return (
        <HeroWrapper>
            <HeroContainer>
                <HeroImage>
                    <ImageWrapper>
                        <Image
                            alt="profile-back"
                            fluid={backgroundImageFluid}
                        />
                    </ImageWrapper>
                    <ThumbnailContainer>
                        <ThumbnailIconWrapper>
                            <Image
                                alt="thumbnail"
                                fluid={thumbnailImageFluid}
                            />
                        </ThumbnailIconWrapper>
                    </ThumbnailContainer>
                </HeroImage>
                {(() => {
                    // Todo: SiteConfigデータのNullチェックを共通化
                    if (profileData) {
                        return (
                            <ProfileArea>
                                <Name>
                                    <JapanName>
                                        {profileData.japanName}
                                    </JapanName>
                                    <RomanNotation>
                                        {profileData.romanNotation}
                                    </RomanNotation>
                                </Name>
                                <ShortMessage>
                                    {profileData.shortMessage}
                                </ShortMessage>
                            </ProfileArea>
                        );
                    }
                })()}
            </HeroContainer>
        </HeroWrapper>
    );
};

export default Hero;
