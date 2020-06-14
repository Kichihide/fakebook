import styled from 'styled-components';
import { COLOR, FONT, FONT_WEIGHT, MARGIN } from '@styles/define';
import {
    MaterialIcon as BaseMaterialIcon,
    IconWrapper as BaseIconWrapper,
} from '@styles/font-icon';
import {
    BaseThumbnailIconWrapper,
    setImgSize,
    setThumbnailIconSize,
} from '@components/image/style';

const ProfileTileWrapper = styled.div`
    background-color: ${COLOR.PROFILE_TAIL_BACK};
    margin-bottom: ${MARGIN.BOTTOM_TIMELINE_CONTENT};
`;

const BackgroundImage = styled.div`
    overflow: hidden;
`;

const ImageWrapper = styled.div`
    ${() => setImgSize('10rem', '100vw')}
`;

const NameContainer = styled.div`
    align-items: flex-end;
    display: flex;
    font-size: ${FONT.XLARGE};
    height: 6.6rem;
    justify-content: center;
    width: 100vw;
`;

const Name = styled.h3`
    margin: 0 0 0.4rem;
`;

const UserDataContainer = styled.div`
    padding: 0 0.8rem;
`;

const DataRow = styled.div<{ isEvenRow: boolean }>`
    align-items: ${({ isEvenRow }) => (isEvenRow ? 'flex-start' : 'center')};
    display: flex;
    font-size: ${FONT.LARGE};
    padding: 0.26rem;

    &:first-child {
        border-top: 0.5px solid ${COLOR.USER_DATA_CONTAINER_BORDER};
        padding-top: 0.8rem;
    }

    &:last-child {
        padding-bottom: 0.8rem;
    }
`;

const TextWrapper = styled.div`
    line-height: 1.34;
`;

const Text = styled.span<{ isBlock: boolean; isStrong: boolean }>`
    ${({ isStrong }) => isStrong && `font-weight: ${FONT_WEIGHT.BOLD}`};
    ${({ isBlock }) => isBlock && `display: block`};

    &:not(:last-child) {
        margin-right: 0.2rem;
    }
`;

const IconWrapper = styled(BaseIconWrapper)`
    font-size: ${FONT.BASE};
    margin-right: 0.6rem;
    padding-bottom: 0.1rem;
    width: 1rem;
`;

const MaterialIcon = styled(BaseMaterialIcon)<{ iconType: string }>`
    color: ${COLOR.ICON_USER_DATA_ROW};
    font-size: ${FONT.XXLARGE};

    ${({ iconType }) =>
        iconType === 'home' &&
        `
        font-size: ${FONT.XXXLARGE};
    `}

    ${({ iconType }) =>
        iconType === 'favorite' &&
        `
        font-size: ${FONT.XLARGE};
    `}
`;

const ThumbnailContainer = styled.div`
    position: absolute;
    top: 6.67rem;
    right: 0;
    left: 0;
`;

const ThumbnailIconWrapper = styled(BaseThumbnailIconWrapper)`
    ${() => setThumbnailIconSize('9rem')}
`;

const ButtonContainer = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
    margin: 0 0.8rem;
    padding-bottom: 0.8rem;
`;

// Todo: 共通化 ※色、サイズも合わせて検討
const Button = styled.div`
    align-items: center;
    background-color: #e6f2ff;
    border-radius: 0.2rem;
    color: #2c84f5;
    display: flex;
    font-size: ${FONT.MEDIUM};
    font-weight: ${FONT_WEIGHT.BOLD};
    justify-content: center;
    padding: 0.5rem 0;
    width: 100%;
`;

export {
    ProfileTileWrapper,
    BackgroundImage,
    ImageWrapper,
    NameContainer,
    Name,
    UserDataContainer,
    DataRow,
    TextWrapper,
    Text,
    IconWrapper,
    MaterialIcon,
    ButtonContainer,
    Button,
    ThumbnailContainer,
    ThumbnailIconWrapper,
};
