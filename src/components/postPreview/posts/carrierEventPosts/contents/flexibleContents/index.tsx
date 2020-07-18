import React, { FC, useRef } from 'react';
import {
    FlexibleContents,
    TitleArea,
    IconWrapper,
    MaterialIcon,
    Contents,
    ContentTitle,
    OpenDetailLabel,
    ThreeDot,
    DetailLabel,
} from './style';

type ContainerProps = FlexibleContentsProps;

const FlexibleContentsContainer: FC<ContainerProps> = (props: ContainerProps) => {
    return <FlexibleContentsComponent {...props} />;
};

interface FlexibleContentsProps {
    isOpen: boolean;
    isInitial: boolean;
    iconType: string;
    title: string;
    html: any;
}

const FlexibleContentsComponent: FC<FlexibleContentsProps> = ({ isOpen, isInitial, iconType, title, html }) => {
    const contentsRef = useRef<HTMLDivElement>(null);

    return (
        <FlexibleContents>
            <TitleArea isOpen={isOpen} isInitial={isInitial}>
                <IconWrapper isOpen={isOpen} isInitial={isInitial}>
                    <MaterialIcon>{iconType}</MaterialIcon>
                </IconWrapper>
                <ContentTitle isOpen={isOpen} isInitial={isInitial} dangerouslySetInnerHTML={{ __html: title }} />
            </TitleArea>
            <Contents
                ref={contentsRef}
                isOpen={isOpen}
                isInitial={isInitial}
                maxHeight={contentsRef.current?.scrollHeight}
                dangerouslySetInnerHTML={{ __html: html }}
            />
            <OpenDetailLabel isOpen={isOpen} isInitial={isInitial}>
                <ThreeDot>...</ThreeDot>
                <DetailLabel>もっと見る</DetailLabel>
            </OpenDetailLabel>
        </FlexibleContents>
    );
};

export default FlexibleContentsContainer;
