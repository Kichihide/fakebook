import React, { FC } from 'react';
import { ContentTitle, DefaultContents, IconWrapper, MaterialIcon, TitleArea } from './style';

type ContainerProps = DefaultContentsProps;

const DefaultContentsContainer: FC<ContainerProps> = (props: ContainerProps) => {
    return <DefaultContentsComponent {...props} />;
};

interface DefaultContentsProps {
    iconType: string;
    title: string;
}

const DefaultContentsComponent: FC<DefaultContentsProps> = ({ iconType, title }) => {
    return (
        <DefaultContents>
            <TitleArea>
                <IconWrapper>
                    <MaterialIcon>{iconType}</MaterialIcon>
                </IconWrapper>
                <ContentTitle dangerouslySetInnerHTML={{ __html: title }} />
            </TitleArea>
        </DefaultContents>
    );
};

export default DefaultContentsContainer;
