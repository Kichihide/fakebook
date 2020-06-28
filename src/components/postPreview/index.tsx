import React, { FC, ComponentProps } from 'react';
import ImageContainer from '@components/image';
import { GatsbyImageSharpFluidFragment, MarkdownRemarkFrontmatter } from 'types/graphql-types';
import {
    PostPreview,
    Header,
    ThumbnailArea,
    ThumbnailIconWrapper,
    MetaInfoArea,
    Name,
    DateWrapper,
    Date,
    MaterialIcon,
    Contents,
} from './style';

type ContainerProps = ComponentProps<typeof PostPreviewComponent>;

const PostPreviewContainer: FC<ContainerProps> = (props: ContainerProps) => {
    return <PostPreviewComponent {...props} />;
};

interface PostPreviewProps {
    fields: MarkdownRemarkFrontmatter;
    html: any;
    thumbnailImageFluid: GatsbyImageSharpFluidFragment;
}

const PostPreviewComponent: FC<PostPreviewProps> = ({ fields, html, thumbnailImageFluid }) => {
    return (
        <PostPreview>
            <Header>
                <ThumbnailArea>
                    <ThumbnailIconWrapper>
                        <ImageContainer alt="thumbnail" fluid={thumbnailImageFluid} />
                    </ThumbnailIconWrapper>
                </ThumbnailArea>
                <MetaInfoArea>
                    <Name>{fields.contributor}</Name>
                    <DateWrapper>
                        <Date>{fields.date}</Date>
                        <MaterialIcon>public</MaterialIcon>
                    </DateWrapper>
                </MetaInfoArea>
            </Header>
            <Contents dangerouslySetInnerHTML={{ __html: html }} />
        </PostPreview>
    );
};

export default PostPreviewContainer;
