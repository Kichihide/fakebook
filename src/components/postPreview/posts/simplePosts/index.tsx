import React, { FC } from 'react';
import PostHeaderContainer from '@components/postPreview/commons/postHeader';
import TagsListContainer from '@components/postPreview/commons/tagsList';
import { GatsbyImageSharpFluidFragment, MarkdownRemarkFields } from 'types/graphql-types';
import { PostPreview, HeaderArea, ContentsArea, PostTagList, Contents } from './style';

type ContainerProps = SimplePostsProps;

const SimplePostsContainer: FC<ContainerProps> = (props: ContainerProps) => {
    return <SimplePostsComponent {...props} />;
};

interface SimplePostsProps {
    fields: MarkdownRemarkFields;
    html: any;
    thumbnailImageFluid: GatsbyImageSharpFluidFragment;
}

const SimplePostsComponent: FC<SimplePostsProps> = ({ fields, html, thumbnailImageFluid }) => {
    return (
        <PostPreview>
            <HeaderArea>
                <PostHeaderContainer fields={fields} thumbnailImageFluid={thumbnailImageFluid} />
            </HeaderArea>
            <ContentsArea>
                <Contents dangerouslySetInnerHTML={{ __html: html }} />
                <PostTagList>
                    <TagsListContainer fields={fields} />
                </PostTagList>
            </ContentsArea>
        </PostPreview>
    );
};

export default SimplePostsContainer;
