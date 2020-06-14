import * as React from 'react';
import device from '@styles/media';
import {
    GatsbyImageSharpFluidFragment,
    MarkdownRemarkFrontmatter,
} from 'types/graphql-types';

import {
    PostPreviewWrapper,
    Header,
    ThumbnailContainer,
    ThumbnailIconWrapper,
    MetaInfo,
    Name,
    DateWrapper,
    Date,
    MaterialIcon,
    Contents,
} from './style';
import { Image } from '@components/image';

type Props = {
    userName?: String;
    fields: MarkdownRemarkFrontmatter;
    html: any;
    thumbnailImageFluid: GatsbyImageSharpFluidFragment;
};

const PostPreview: React.FC<Props> = ({
    userName,
    fields,
    html,
    thumbnailImageFluid,
}) => {
    return (
        <PostPreviewWrapper>
            <Header>
                <ThumbnailContainer>
                    <ThumbnailIconWrapper>
                        <Image alt="thumbnail" fluid={thumbnailImageFluid} />
                    </ThumbnailIconWrapper>
                </ThumbnailContainer>
                <MetaInfo>
                    <Name>{userName}</Name>
                    <DateWrapper>
                        <Date>{fields.date}</Date>
                        <MaterialIcon>public</MaterialIcon>
                    </DateWrapper>
                </MetaInfo>
            </Header>
            <Contents dangerouslySetInnerHTML={{ __html: html }} />
        </PostPreviewWrapper>
    );
};

export default PostPreview;
