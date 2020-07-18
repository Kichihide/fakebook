import styled, { css, keyframes } from 'styled-components';
import device from '@styles/core/media';
import { COLOR } from '@styles/define';
import { BaseTagList } from '@components/postPreview/commons/tagList/style';
import { BaseContentsArea, BaseHeaderArea, BasePostPreview } from '@components/postPreview/style';

const MetaRowHeight = `1rem`;

const PostTagListHeight = `0.8rem`;

const animation = (keyframes: () => any) => {
    const duration = device.pc ? `.3s` : `.1s`;
    return css`
        ${keyframes()} ${duration} ease forwards;
    `;
};

const simpleKeyframe = (defStyle: () => any, openStyle: () => any, intermediateStyle?: () => any) => {
    return keyframes`
    0% {
        ${defStyle()}
    }
    ${intermediateStyle && intermediateStyle()};
    100% {
        ${openStyle()}
    }
  `;
};

const setAnimation = (
    isOpen: boolean,
    isInitial: boolean,
    defStyle: () => any,
    openStyle: () => any,
    intermediateStyle?: () => any
) => {
    return css`
        ${!isOpen && defStyle()};
        animation: ${isOpen && animation(() => simpleKeyframe(defStyle, openStyle, intermediateStyle))};
        animation: ${!isOpen && !isInitial && animation(() => simpleKeyframe(openStyle, defStyle, intermediateStyle))};
    `;
};

const PostPreview = styled(BasePostPreview)``;
const HeaderArea = styled(BaseHeaderArea)``;

const ContentsArea = styled(BaseContentsArea)`
    display: flex;
    flex-flow: column;
`;

const MetaData = styled.div`
    height: calc(${MetaRowHeight} + ${PostTagListHeight});
    position: relative;
`;

const defStyleForMetaRow = () => {
    return `
        right: 0;
        left: 0;
    `;
};

const openStyleForMetaRow = (width = 0) => {
    return `
        right: calc(100% - ${width}px);
        left: 0;
    `;
};

const MetaRow = styled.div<{ isOpen: boolean; isInitial: boolean; width?: number }>`
    color: ${COLOR.POST_PREVIEW_CARRIER_EVENT_META_ROW};
    margin: auto;
    height: ${MetaRowHeight};
    position: absolute;
    top: 0;
    width: fit-content;

    ${({ isOpen, isInitial, width }) =>
        setAnimation(isOpen, isInitial, defStyleForMetaRow, () => openStyleForMetaRow(width))};
`;

const Date = styled.span``;

const Job = styled.span``;

const Hyphen = styled.span`
    margin-right: 0.3rem;
    margin-left: 0.3rem;
`;

const defStyleForPostTagList = () => {
    return `
        justify-content: center; // Todo: アニメーションしないが、工数の兼ね合いで暫定実装
        right: 0;
        left: 0;
    `;
};

const openStyleForPostTagList = () => {
    return `
        right: 20%;
        left: 0;
    `;
};

const PostTagList = styled(BaseTagList)<{ isOpen: boolean; isInitial: boolean }>`
    margin: auto;
    height: ${PostTagListHeight};
    overflow-y: hidden;
    position: absolute;
    top: ${MetaRowHeight};
    width: 80%;

    ${({ isOpen, isInitial }) => setAnimation(isOpen, isInitial, defStyleForPostTagList, openStyleForPostTagList)};
`;

export { setAnimation, PostPreview, HeaderArea, ContentsArea, MetaData, MetaRow, Date, Hyphen, Job, PostTagList };
