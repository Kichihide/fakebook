import styled from 'styled-components';
import { COLOR, FONT } from '@styles/define';
import { MaterialIcon as BaseMaterialIcon, IconWrapper as BaseIconWrapper } from '@styles/core/font-icon';

const DataRow = styled.div<{ isEvenRow: boolean }>`
    align-items: ${({ isEvenRow }) => (isEvenRow ? 'flex-start' : 'center')};
    display: flex;
    font-size: ${FONT.MEDIUM_LARGE};
    padding: 0.26rem;

    &:last-child {
        padding-bottom: 0.8rem;
    }
`;

const TextWrapper = styled.div`
    line-height: 1.34;
`;

const IconWrapper = styled(BaseIconWrapper)`
    font-size: ${FONT.BASE};
    margin-right: 0.6rem;
    padding-bottom: 0.1rem;
    width: 1rem;
`;

const MaterialIcon = styled(BaseMaterialIcon)<{ iconType: string }>`
    color: ${COLOR.PERSONAL_INFO_ICON};
    font-size: ${FONT.XXLARGE};

    ${({ iconType }) =>
        iconType === 'home' &&
        `
        font-size: ${FONT.XXXLARGE};
    `}

    ${({ iconType }) =>
        iconType === 'favorite' &&
        `
        font-size: ${FONT.XLARGE};
    `}
`;

export { DataRow, TextWrapper, IconWrapper, MaterialIcon };
