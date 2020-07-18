import React, { FC } from 'react';
import DefaultContentsContainer from '@components/postPreview/posts/carrierEventPosts/contents/defaultContents';
import FlexibleContentsContainer from '@components/postPreview/posts/carrierEventPosts/contents/flexibleContents';

interface ContainerProps {
    isOpen: boolean;
    isInitial?: boolean;
    title: string;
    html: any;
}

const ContentsContainer: FC<ContainerProps> = ({ isOpen, isInitial, title, html }) => {
    const iconType = 'business_center';
    if (html !== '' && isInitial != null) {
        return (
            <FlexibleContentsContainer
                isOpen={isOpen}
                isInitial={isInitial}
                iconType={iconType}
                title={title}
                html={html}
            />
        );
    }

    return <DefaultContentsContainer iconType={iconType} title={title} />;
};

export default ContentsContainer;
