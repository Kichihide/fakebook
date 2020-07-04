import React, { FC, ComponentProps } from 'react';
import PostHeaderContainer from '@components/postPreview/commons/postHeader';
import TagListContainer from '@components/postPreview/commons/TagList';
import { GatsbyImageSharpFluidFragment, MarkdownRemarkFields } from 'types/graphql-types';
import { PostPreview, HeaderArea, ContentsArea, PostTagList, Contents } from './style';

type ContainerProps = ComponentProps<typeof SimplePostsComponent>;

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
                    <TagListContainer fields={fields} />
                </PostTagList>
            </ContentsArea>
        </PostPreview>
    );
};

export default SimplePostsContainer;
