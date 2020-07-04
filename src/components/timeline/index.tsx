import React, { FC } from 'react';
import PostPreviewContainer from '@components/postPreview';
import usePostList from '@components/timeline/usePostList';
import { GatsbyImageSharpFluidFragment, MarkdownRemarkEdge } from 'types/graphql-types';
import { Timeline } from './style';

interface ContainerProps {
    postList: Array<MarkdownRemarkEdge>;
    thumbnailImageFluid: GatsbyImageSharpFluidFragment;
}

const TimelineContainer: FC<ContainerProps> = ({ postList, thumbnailImageFluid }) => {
    const [sortedPostList] = usePostList(postList);

    return <TimelineComponent postList={sortedPostList} thumbnailImageFluid={thumbnailImageFluid} />;
};

interface TimelineProps {
    postList: Array<MarkdownRemarkEdge>;
    thumbnailImageFluid: GatsbyImageSharpFluidFragment;
}

const TimelineComponent: FC<TimelineProps> = ({ postList, thumbnailImageFluid }) => {
    return (
        <Timeline>
            {(() => {
                return postList.map((edge: any) => {
                    return (
                        <PostPreviewContainer
                            key={edge.node.fields.id}
                            fields={edge.node.fields}
                            html={edge.node.html}
                            thumbnailImageFluid={thumbnailImageFluid}
                        />
                    );
                });
            })()}
        </Timeline>
    );
};

export default TimelineContainer;
