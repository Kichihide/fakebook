import styled from 'styled-components';
import device from '@styles/media';
import { COLOR, FONT } from '@styles/define';
import {
    IconWrapper as BaseIconWrapper,
    MaterialIcon as BaseMaterialIcon,
} from '@styles/font-icon';

// Todo: レスポンシブ本格実装
const HeaderWrapper = styled.header`
    align-items: center;
    background-color: ${COLOR.HEADER_BACK};
    box-shadow: 0 0 8px 4px rgba(0, 0, 0, 0.26);
    display: flex;
    height: 2.3rem;
    justify-content: space-between;
    padding: 0 0.6rem 0 0.4rem;
    position: relative;
    z-index: 100;

    ${device.pc`
        background-color: red;
  `}
`;

const IconWrapper = styled(BaseIconWrapper)`
    border-radius: 50%;
    margin-top: 0.05rem;
    padding: 0.3rem;
    transform: rotate(2deg);
`;

const MaterialIcon = styled(BaseMaterialIcon)`
    color: ${COLOR.ICON_HEADER_SEARCH};
    font-size: ${FONT.XXXLARGE};
`;

export { HeaderWrapper, IconWrapper, MaterialIcon };
