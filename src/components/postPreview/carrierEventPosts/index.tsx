import React, { FC, ComponentProps } from 'react';
import PostHeaderContainer from '@components/postPreview/commons/postHeader';
import TagListContainer from '@components/postPreview/commons/TagList';
import { GatsbyImageSharpFluidFragment, MarkdownRemarkFields } from 'types/graphql-types';
import {
    PostPreview,
    HeaderArea,
    ContentsArea,
    PostTagList,
    IconWrapper,
    MaterialIcon,
    Contents,
    MetaData,
    MetaRow,
    Date,
    Hyphen,
    Job,
} from './style';

type ContainerProps = ComponentProps<typeof CarrierEventPostsComponent>;

const CarrierEventPostsContainer: FC<ContainerProps> = (props: ContainerProps) => {
    return <CarrierEventPostsComponent {...props} />;
};

interface CarrierEventPostsProps {
    fields: MarkdownRemarkFields;
    html: any;
    thumbnailImageFluid: GatsbyImageSharpFluidFragment;
}

const CarrierEventPostsComponent: FC<CarrierEventPostsProps> = ({ fields, html, thumbnailImageFluid }) => {
    return (
        <PostPreview>
            <HeaderArea>
                <PostHeaderContainer fields={fields} thumbnailImageFluid={thumbnailImageFluid} />
            </HeaderArea>
            <ContentsArea>
                <IconWrapper>
                    <MaterialIcon>business_center</MaterialIcon>
                </IconWrapper>
                <Contents dangerouslySetInnerHTML={{ __html: html }} />
                <MetaData>
                    <MetaRow>
                        <Date>{fields.date}</Date>
                        <Hyphen>ー</Hyphen>
                        <Job>{fields.job}</Job>
                    </MetaRow>
                    <PostTagList>
                        <TagListContainer fields={fields} />
                    </PostTagList>
                </MetaData>
            </ContentsArea>
        </PostPreview>
    );
};

export default CarrierEventPostsContainer;
