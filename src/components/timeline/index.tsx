import * as React from 'react';
import { GatsbyImageSharpFluidFragment } from 'types/graphql-types';
import PostPreview from '@components/postPreview';
import { TimelineContainer } from './style';

type Props = {
    postList: Array<any>;
    thumbnailImageFluid: GatsbyImageSharpFluidFragment;
};

const Timeline: React.FC<Props> = ({ postList, thumbnailImageFluid }) => {
    const _postList = postList.sort((a, b) => {
        return a < b ? 1 : -1;
    });
    return (
        <TimelineContainer>
            {(() => {
                return _postList.map((edge: any) => {
                    const { frontmatter, html } = edge.node;
                    return (
                        <PostPreview
                            key={frontmatter.id}
                            fields={frontmatter}
                            html={html}
                            thumbnailImageFluid={thumbnailImageFluid}
                        />
                    );
                });
            })()}
        </TimelineContainer>
    );
};

export default Timeline;
