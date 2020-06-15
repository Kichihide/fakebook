import styled from 'styled-components';
import { COLOR, FONT_WEIGHT } from '@styles/define';

const BaseButton = styled.div`
    align-items: center;
    border-radius: 0.26rem;
    display: flex;
`;

const PrimaryButton = styled(BaseButton)`
    background-color: ${COLOR.BUTTON_PRIMARY_BACK};
    color: ${COLOR.BUTTON_PRIMARY_TEXT};
    font-weight: ${FONT_WEIGHT.BOLD};
`;

export { PrimaryButton };
