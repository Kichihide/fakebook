import React, { FC } from 'react';
import SimplePostsContainer from '@components/postPreview/simplePosts';
import CarrierEventPostsContainer from '@components/postPreview/carrierEventPosts';
import { GatsbyImageSharpFluidFragment, MarkdownRemarkFields } from 'types/graphql-types';

interface ContainerProps {
    fields: MarkdownRemarkFields;
    html: any;
    thumbnailImageFluid: GatsbyImageSharpFluidFragment;
}

const PostPreviewContainer: FC<ContainerProps> = (props: ContainerProps) => {
    const { category } = props.fields;

    switch (category) {
        case 'つぶやき':
            return <SimplePostsContainer {...props} />;

        case 'キャリアイベント':
            return <CarrierEventPostsContainer {...props} />;

        default:
            // Todo: データ不備時の画面表示
            return null;
    }
};

export default PostPreviewContainer;
