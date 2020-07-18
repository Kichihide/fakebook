import styled from 'styled-components';
import { BaseTagList } from '@components/postPreview/commons/tagsList/style';
import { BaseHeaderArea, BaseContentsArea, BaseContents, BasePostPreview } from '@components/postPreview/style';

const PostPreview = styled(BasePostPreview)``;
const HeaderArea = styled(BaseHeaderArea)``;
const ContentsArea = styled(BaseContentsArea)``;
const PostTagList = styled(BaseTagList)``;
const Contents = styled(BaseContents)`
    margin-bottom: 0.8rem;
`;

export { PostPreview, HeaderArea, ContentsArea, PostTagList, Contents };
