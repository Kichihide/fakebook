import styled from 'styled-components';
import { COLOR } from '@styles/define';

const BaseButton = styled.div`
    border-radius: 0.26rem;
    overflow: hidden;

    &:hover {
        transition: all 0.5s ease;
    }

    &:active {
        transition: all 0.12s ease;
    }

    &:focus {
        transition: all 0.3s ease;
        outline: none;
    }

    * {
        &:hover,
        &:active,
        &:focus {
            background-color: unset;
            color: unset;
            filter: none;
        }
    }

    > *:only-child {
        align-items: center;
        display: flex;
        justify-content: center;
    }
`;

const PrimaryButton = styled(BaseButton)`
    background-color: ${COLOR.BUTTON_PRIMARY_BACK};
    color: ${COLOR.BUTTON_PRIMARY_TEXT};

    &:hover {
        filter: brightness(1.36);
    }

    &:active {
        filter: brightness(1.52);
    }

    &:focus {
        filter: brightness(1.4);
    }
`;

const SecondaryButton = styled(BaseButton)`
    background-color: ${COLOR.BUTTON_SECONDARY_BACK};
    color: ${COLOR.BUTTON_SECONDARY_TEXT};

    &:hover {
        filter: brightness(0.92);
    }

    &:active {
        filter: brightness(0.9);
    }

    &:focus {
        filter: brightness(0.9);
    }
`;

export { PrimaryButton, SecondaryButton };
