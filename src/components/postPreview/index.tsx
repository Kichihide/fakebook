import * as React from 'react';
import Image from '@components/image';
import {
    GatsbyImageSharpFluidFragment,
    MarkdownRemarkFrontmatter,
} from 'types/graphql-types';
import {
    PostPreviewContainer,
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

type Props = {
    fields: MarkdownRemarkFrontmatter;
    html: any;
    thumbnailImageFluid: GatsbyImageSharpFluidFragment;
};

const PostPreview: React.FC<Props> = ({
    fields,
    html,
    thumbnailImageFluid,
}) => {
    return (
        <PostPreviewContainer>
            <Header>
                <ThumbnailArea>
                    <ThumbnailIconWrapper>
                        <Image alt="thumbnail" fluid={thumbnailImageFluid} />
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
        </PostPreviewContainer>
    );
};

export default PostPreview;
