import styled from 'styled-components';
import {
    ICON_SIZE,
    BaseContentsWrapper,
    BaseTitleArea,
    BaseIconWrapper,
    BaseMaterialIcon,
    BaseContentsTitle,
} from '@components/postPreview/posts/carrierEventPosts/contents/style';

const DefaultContents = styled(BaseContentsWrapper)``;

const TitleArea = styled(BaseTitleArea)`
    height: 5.8rem;
`;

const IconWrapper = styled(BaseIconWrapper)`
    top: 0.2rem;
    right: 0;
    bottom: calc(100% - ${ICON_SIZE});
    left: 0;
`;
const MaterialIcon = styled(BaseMaterialIcon)``;
const ContentTitle = styled(BaseContentsTitle)`
    height: 3rem;
    justify-content: center;
    margin: auto;

    right: 0;
    bottom: 0;
    left: 0;
`;

export { DefaultContents, TitleArea, IconWrapper, MaterialIcon, ContentTitle };
