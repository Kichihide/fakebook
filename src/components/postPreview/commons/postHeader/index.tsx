import React, { FC } from 'react';
import ImageContainer from '@components/image';
import useHeaderFields, { HeaderFields } from '@components/postPreview/commons/postHeader/useHeaderFields';
import { GatsbyImageSharpFluidFragment, MarkdownRemarkFields } from 'types/graphql-types';
import {
    PostHeader,
    ThumbnailArea,
    ThumbnailIconWrapper,
    MetaInfoArea,
    Name,
    DateWrapper,
    Date,
    MaterialIcon,
} from './style';

interface ContainerProps {
    fields: MarkdownRemarkFields;
    thumbnailImageFluid: GatsbyImageSharpFluidFragment;
}

const PostHeaderContainer: FC<ContainerProps> = ({ fields, thumbnailImageFluid }) => {
    const [headerFields] = useHeaderFields(fields);

    if (!headerFields) {
        // Todo: データ不備時の画面表示
        return null;
    }
    return <PostHeaderComponent headerFields={headerFields} thumbnailImageFluid={thumbnailImageFluid} />;
};

interface PostHeaderProps {
    headerFields: HeaderFields;
    thumbnailImageFluid: GatsbyImageSharpFluidFragment;
}

const PostHeaderComponent: FC<PostHeaderProps> = ({ headerFields, thumbnailImageFluid }) => {
    return (
        <PostHeader>
            <ThumbnailArea>
                <ThumbnailIconWrapper>
                    <ImageContainer alt="thumbnail" fluid={thumbnailImageFluid} />
                </ThumbnailIconWrapper>
            </ThumbnailArea>
            <MetaInfoArea>
                <Name>{headerFields.contributor}</Name>
                <DateWrapper>
                    <Date>{headerFields.date}</Date>
                    <MaterialIcon>public</MaterialIcon>
                </DateWrapper>
            </MetaInfoArea>
        </PostHeader>
    );
};

export default PostHeaderContainer;
