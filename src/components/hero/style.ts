import styled from 'styled-components';
import device from '@styles/core/media';
import { COLOR, FONT, CONTENTS } from '@styles/define';
import {
    BaseThumbnailIconWrapper,
    setImgSize,
    setCircleImgSize,
} from '@components/image/style';

const HeroWrapper = styled.div`
    background-color: ${COLOR.HERO_CONTENTS_BACK};

    ${device.pc`
        padding: 0 .6rem 2rem;
    `};
`;

const HeroContainer = styled.div`
    align-content: center;
    display: flex;
    flex-flow: column;
    justify-content: center;
    margin: 0 auto;
    max-width: ${CONTENTS.MAX_WIDTH};
`;

const HeroImage = styled.div`
    position: relative;
`;

const ImageWrapper = styled.div`
    ${() => setImgSize('auto', '100%')}

    overflow: hidden;

    ${device.pc`
        border-radius: 0 0 ${CONTENTS.BORDER_RADIUS} ${CONTENTS.BORDER_RADIUS};
        height: 18.4rem;
    `};
    ${device.sp`
        height: 52vw;
    `};
`;

const ThumbnailContainer = styled.div`
    position: absolute;
    right: 0;
    left: 0;

    ${device.pc`
        bottom: -1rem;
    `};
    ${device.sp`
        bottom: -4.2rem;
    `};
`;

const ThumbnailIconWrapper = styled(BaseThumbnailIconWrapper)`
    margin: 0 auto;
    ${() => setCircleImgSize('9rem')}
`;

const ProfileArea = styled.div`
    align-items: center;
    display: flex;
    flex-flow: column;

    ${device.pc`
        padding-top: 2.2rem;
    `};
    ${device.sp`
        padding-top: 5rem;
    `};
`;

const Name = styled.div`
    margin-bottom: 0.8rem;
    text-align: center;
`;

const JapanName = styled.h2`
    line-height: 1.2;

    ${device.pc`
        font-size: ${FONT.XXXXLARGE};
    `};
    ${device.sp`
        font-size: ${FONT.XXLARGE};
    `};
`;

const RomanNotation = styled.span`
    align-items: center;
    display: flex;

    &::before {
        content: '（';
    }
    &::after {
        content: '）';
    }
    ${device.pc`
        font-size: ${FONT.LARGE};

        &::before,
        &::after {
            font-size: .85em;
        }        
        &::before {
            margin-right: .2rem;
        }
        &::after {
            margin-left: .2rem;
        }  
    `};
    ${device.sp`
        font-size: ${FONT.BASE};
        
        &::before,
        &::after {
            font-size: .9em;
        }
        &::before {
            margin-right: .1rem;
        }
        &::after {
            margin-left: .1rem;
        }
    `};
`;

const ShortMessage = styled.div`
    color: ${COLOR.HERO_MESSAGE};
    text-align: center;

    ${device.pc`
        font-size: ${FONT.LARGE_XLARGE};
        width: 80%;
    `};
    ${device.sp`
        font-size: ${FONT.BASE_MEDIUM};
        padding: 0 .8rem;
    `};
`;

export {
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
};
