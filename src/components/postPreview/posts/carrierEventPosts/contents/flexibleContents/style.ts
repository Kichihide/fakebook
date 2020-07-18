import styled from 'styled-components';
import device from '@styles/core/media';
import { COLOR } from '@styles/define';
import { setAnimation } from '@components/postPreview/posts/carrierEventPosts/style';
import { BaseContents } from '@components/postPreview/style';
import {
    ICON_SIZE,
    BaseContentsWrapper,
    BaseTitleArea,
    BaseIconWrapper,
    BaseMaterialIcon as MaterialIcon,
    BaseContentsTitle,
} from '@components/postPreview/posts/carrierEventPosts/contents/style';

const FlexibleContents = styled(BaseContentsWrapper)`
    &:hover {
        cursor: pointer;
        transition: all 0.5s ease;
    }
`;

const defStyleForTitleArea = () => {
    if (device.sp) {
        return `height: 5.4rem`;
    }
    return `height: 5.8rem`;
};

const openStyleForTitleArea = () => {
    return `height: 3rem`;
};

const TitleArea = styled(BaseTitleArea)<{ isOpen: boolean; isInitial: boolean }>`
    ${({ isOpen, isInitial }) => setAnimation(isOpen, isInitial, defStyleForTitleArea, openStyleForTitleArea)};
`;

const defStyleForIconWrapper = () => {
    return `
        top: 0.2rem;
        right: 0;
        bottom: calc(100% - ${ICON_SIZE});
        left: 0;
    `;
};

const intermediateStyleForIconWrapper = () => {
    return `
        50% {
            top: 0.2rem;
            right: 0;
            bottom: calc(100% - ${ICON_SIZE});
            left: calc(100% - ${ICON_SIZE});
        }
    `;
};

const openStyleForIconWrapper = () => {
    return `
        top: 0;
        right: 0;
        bottom: 8px;
        left: calc(100% - ${ICON_SIZE});
    `;
};

const IconWrapper = styled(BaseIconWrapper)<{ isOpen: boolean; isInitial: boolean }>`
    ${({ isOpen, isInitial }) =>
        setAnimation(
            isOpen,
            isInitial,
            defStyleForIconWrapper,
            openStyleForIconWrapper,
            intermediateStyleForIconWrapper
        )};
`;

const defStyleForContentTitle = () => {
    return `
        justify-content: center; // Todo: アニメーションしないが、工数の兼ね合いで暫定実装
        top: 2.2rem;
        right: 0;
        bottom: 0;
        left: 0;
    `;
};

const intermediateStyleForContentTitle = () => {
    return `
        50% {
            top: 2.2rem;
            right: calc(100% - ${ICON_SIZE});
            bottom: 0;
            left: 0;
        }
    `;
};

const openStyleForContentTitle = () => {
    return `
        top: 0;
        right: calc(100% - ${ICON_SIZE});
        bottom: 0;
        left: 0;
    `;
};

const ContentTitle = styled(BaseContentsTitle)<{ isOpen: boolean; isInitial: boolean }>`
    flex-wrap: wrap;
    height: fit-content;
    margin: auto;
    max-width: calc(100% - ${ICON_SIZE});
    overflow-x: hidden;
    white-space: nowrap;
    width: min-content;

    ${({ isOpen, isInitial }) =>
        setAnimation(
            isOpen,
            isInitial,
            defStyleForContentTitle,
            openStyleForContentTitle,
            intermediateStyleForContentTitle
        )};
`;

const defStyleForContents = () => {
    return `
        max-height: 0;
        opacity: 0;
        ${device.pc`padding-top: .4rem`};
        ${device.sp`padding-top: .2rem`};
    `;
};

const intermediateStyleForContents = () => {
    return `
        50% {
            opacity: 0;
            padding-top: 1rem;
        }
    `;
};

const openStyleForContents = (maxHeight = 200) => {
    return `
        max-height: ${maxHeight}px;
        opacity: 1;
        padding-top: 1rem;
    `;
};

const Contents = styled(BaseContents)<{ isOpen: boolean; isInitial: boolean; maxHeight?: number }>`
    overflow-y: hidden;
    height: auto;
    width: 100%;

    ${({ isOpen, isInitial, maxHeight }) =>
        setAnimation(
            isOpen,
            isInitial,
            defStyleForContents,
            () => openStyleForContents(maxHeight),
            intermediateStyleForContents
        )};
`;

const defStyleForOpenDetailLabel = () => {
    return `opacity: 1`;
};

const intermediateStyleForOpenDetailLabel = () => {
    return `
        50% {
            opacity: 0;
            transform: scaleY(1);
        }
    `;
};

const openStyleForOpenDetailLabel = () => {
    return `
        opacity: 0;
        transform: scaleY(0);
    `;
};

const OpenDetailLabel = styled.div<{ isOpen: boolean; isInitial: boolean }>`
    color: ${COLOR.OPEN_DETAIL_LABEL_TEXT};

    ${({ isOpen, isInitial }) =>
        setAnimation(
            isOpen,
            isInitial,
            defStyleForOpenDetailLabel,
            openStyleForOpenDetailLabel,
            intermediateStyleForOpenDetailLabel
        )};
`;

const ThreeDot = styled.span`
    margin-right: 0.2rem;
`;

const DetailLabel = styled.span`
    &:hover {
        border-bottom: 0.5px solid ${COLOR.OPEN_DETAIL_LABEL_BORDER};
    }
`;

export {
    FlexibleContents,
    TitleArea,
    IconWrapper,
    MaterialIcon,
    ContentTitle,
    Contents,
    OpenDetailLabel,
    ThreeDot,
    DetailLabel,
};
