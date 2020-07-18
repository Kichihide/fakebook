import React, { FC } from 'react';
import { IconWrapper, MaterialIcon, DataRow, TextWrapper } from './style';

type ContainerProps = RowProps;

const RowContainer: FC<ContainerProps> = (props: ContainerProps) => {
    return <RowComponent {...props} />;
};

interface RowProps {
    isEvenRow: boolean;
    iconType: string;
}

const RowComponent: FC<RowProps> = ({ isEvenRow, iconType, children }) => {
    return (
        <DataRow isEvenRow={isEvenRow}>
            <IconWrapper>
                <MaterialIcon iconType={iconType}>{iconType}</MaterialIcon>
            </IconWrapper>
            <TextWrapper>{children}</TextWrapper>
        </DataRow>
    );
};

export default RowContainer;
