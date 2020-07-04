import styled from 'styled-components';
import device from '@styles/core/media';
import { COLOR, FONT } from '@styles/define';
import { IconWrapper as BaseIconWrapper, MaterialIcon as BaseMaterialIcon } from '@styles/core/font-icon';
import { setCircleImgSize } from '@components/image/style';
import { BaseTagList } from '@components/postPreview/commons/TagList/style';
import { BaseContents, BaseContentsArea, BaseHeaderArea, BasePostPreview } from '@components/postPreview/style';

const PostPreview = styled(BasePostPreview)``;
const HeaderArea = styled(BaseHeaderArea)``;

const ContentsArea = styled(BaseContentsArea)`
    align-items: center;
    display: flex;
    flex-flow: column;
`;

const PostTagList = styled(BaseTagList)`
    width: 80%;

    ${device.sp`
        justify-content: center;
    `};
`;

const IconWrapper = styled(BaseIconWrapper)`
    background-color: ${COLOR.POST_PREVIEW_CARRIER_EVENT_BUSINESS_ICON_WRAPPER_BACK};
    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.18), 0 2px 2px 0 rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.1);
    font-size: ${FONT.BASE};
    margin: 0.2rem 0.4rem 0.8rem;

    ${() => setCircleImgSize('2rem')}
`;

const MaterialIcon = styled(BaseMaterialIcon)`
    color: ${COLOR.POST_PREVIEW_CARRIER_EVENT_BUSINESS_ICON};
    font-size: ${FONT.XXLARGE};
`;

const Contents = styled(BaseContents)`
    font-size: ${FONT.LARGE};
    margin-bottom: 1.6rem;

    h2 {
        font-size: ${FONT.XLARGE_XXLARGE};
        text-align: center;
        margin-bottom: 0.4rem;
    }

    p {
        align-items: center;
        display: flex;
        flex-flow: column;
    }
`;

const MetaData = styled.div`
    align-items: center;
    display: flex;
    flex-flow: column;
`;

const MetaRow = styled.div`
    color: ${COLOR.POST_PREVIEW_CARRIER_EVENT_META_ROW};
`;

const Date = styled.span``;

const Job = styled.span``;

const Hyphen = styled.span`
    margin-right: 0.3rem;
    margin-left: 0.3rem;
`;

export {
    PostPreview,
    HeaderArea,
    ContentsArea,
    PostTagList,
    IconWrapper,
    MaterialIcon,
    Contents,
    MetaData,
    MetaRow,
    Date,
    Hyphen,
    Job,
};
