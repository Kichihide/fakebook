import * as React from 'react';
import {
    GatsbyImageSharpFluidFragment,
    MarkdownRemarkFrontmatter,
} from 'types/graphql-types';
import { ThumbnailIcon } from '@components/image';

import {
    PostPreviewWrapper,
    Header,
    ThumbnailIconWrapper,
    MetaInfo,
    Name,
    DateWrapper,
    Date,
    MaterialIcon,
    Contents,
} from './style';

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
    // Todo: レスポンシブ対応
    const heightForHeader = '1.8rem';
    return (
        <PostPreviewWrapper>
            <Header>
                <ThumbnailIconWrapper>
                    <ThumbnailIcon
                        fluid={thumbnailImageFluid}
                        diameter={heightForHeader}
                    />
                </ThumbnailIconWrapper>
                <MetaInfo height={heightForHeader}>
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
