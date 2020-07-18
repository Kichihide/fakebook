import React, { FC, useMemo, useRef } from 'react';
import PostHeaderContainer from '@components/postPreview/commons/postHeader';
import TagListContainer from '@components/postPreview/commons/tagList';
import useContentsState, { ContentsState } from '@components/postPreview/posts/carrierEventPosts/useContentsState';
import ContentsContainer from '@components/postPreview/posts/carrierEventPosts/contents';
import { GatsbyImageSharpFluidFragment, MarkdownRemarkFields } from 'types/graphql-types';
import { PostPreview, HeaderArea, ContentsArea, PostTagList, MetaData, MetaRow, Date, Hyphen, Job } from './style';

interface ContainerProps {
    fields: MarkdownRemarkFields;
    html: any;
    thumbnailImageFluid: GatsbyImageSharpFluidFragment;
}

const CarrierEventPostsContainer: FC<ContainerProps> = ({ fields, html, thumbnailImageFluid }) => {
    const [contentsState] = useContentsState(fields, html);

    if (!contentsState) {
        // Todo: データ不備時の画面表示
        return null;
    }

    return useMemo(
        () => (
            <CarrierEventPostsComponent
                contentsState={contentsState}
                fields={fields}
                thumbnailImageFluid={thumbnailImageFluid}
            />
        ),
        [contentsState.isOpen]
    );
};

interface CarrierEventPostsProps {
    contentsState: ContentsState;
    fields: MarkdownRemarkFields;
    thumbnailImageFluid: GatsbyImageSharpFluidFragment;
}

const CarrierEventPostsComponent: FC<CarrierEventPostsProps> = ({ contentsState, fields, thumbnailImageFluid }) => {
    const metaRowRef = useRef<HTMLDivElement>(null);

    return (
        <PostPreview>
            <HeaderArea>
                <PostHeaderContainer fields={fields} thumbnailImageFluid={thumbnailImageFluid} />
            </HeaderArea>
            <ContentsArea onClick={contentsState.toggleOpen}>
                <ContentsContainer
                    isOpen={contentsState.isOpen}
                    isInitial={contentsState.isInitial}
                    title={contentsState.title}
                    html={contentsState.html}
                />
                <MetaData>
                    <MetaRow
                        ref={metaRowRef}
                        isOpen={contentsState.isOpen}
                        isInitial={contentsState.isInitial}
                        width={metaRowRef.current?.clientWidth}
                    >
                        <Date>{contentsState.date}</Date>
                        <Hyphen>ー</Hyphen>
                        <Job>{contentsState.job}</Job>
                    </MetaRow>
                    <PostTagList isOpen={contentsState.isOpen} isInitial={contentsState.isInitial}>
                        <TagListContainer fields={fields} />
                    </PostTagList>
                </MetaData>
            </ContentsArea>
        </PostPreview>
    );
};

export default CarrierEventPostsContainer;
