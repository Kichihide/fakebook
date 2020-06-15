import * as React from 'react';
import { IconWrapper, MaterialIcon, DataRow, TextWrapper } from '../style';

type Props = {
    isEvenRow: boolean;
    iconType: string;
};

const Row: React.FC<Props> = ({ isEvenRow, iconType, children }) => {
    return (
        <DataRow isEvenRow={isEvenRow}>
            <IconWrapper>
                <MaterialIcon iconType={iconType}>{iconType}</MaterialIcon>
            </IconWrapper>
            <TextWrapper>{children}</TextWrapper>
        </DataRow>
    );
};

export default Row;
