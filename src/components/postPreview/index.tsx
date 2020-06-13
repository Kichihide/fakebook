import * as React from 'react';
import device from '@styles/media';
import {
    GatsbyImageSharpFluidFragment,
    MarkdownRemarkFrontmatter,
} from 'types/graphql-types';
import { ThumbnailIcon } from '@components/image';

import {
    PostPreviewWrapper,
    Header,
    ThumbnailContainer,
    MetaInfo,
    Name,
    DateWrapper,
    Date,
    MaterialIcon,
    Contents,
} from './style';

function getHeaderHeight(): string {
    if (device.pc) {
        return '2.2rem';
    } else {
        return '1.8rem';
    }
}

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
                    <ThumbnailIcon
                        fluid={thumbnailImageFluid}
                        diameter={getHeaderHeight()}
                    />
                </ThumbnailContainer>
                <MetaInfo heightSize={getHeaderHeight()}>
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
