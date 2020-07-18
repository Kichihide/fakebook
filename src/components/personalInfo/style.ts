import styled from 'styled-components';
import device from '@styles/core/media';
import { COLOR, FONT, FONT_WEIGHT, CONTENTS } from '@styles/define';
import { MaterialIcon as BaseMaterialIcon, IconWrapper as BaseIconWrapper } from '@styles/core/font-icon';
import { SecondaryButton as BaseSecondaryButton } from '@styles/components/button';

const PersonalInfo = styled.div`
    background-color: ${COLOR.HERO_CONTENTS_BACK};
    height: min-content;

    ${device.pc`
        border-radius: ${CONTENTS.BORDER_RADIUS};
        box-shadow: ${CONTENTS.BOX_SHADOW};
        margin-bottom: ${CONTENTS.GAP_PC};
    `};
    ${device.sp`
        margin-bottom: ${CONTENTS.GAP_SP};
    `};
`;

const Header = styled.div`
    ${device.sp`
        display: none;
    `};
    ${device.pc`
        font-weight: ${FONT_WEIGHT.BOLD};
        margin: .8rem 0.8rem 0;
    `};
`;

const UserDataArea = styled.div`
    margin: 0 0.8rem;

    ${device.pc`
        padding-top: .28rem;
    `};
    ${device.sp`
        border-top: .8px solid ${COLOR.SEPARATE_BORDER};
        padding-top: .8rem;
    `};
`;

const Heading = styled.div`
    display: block;
    font-size: 0.95em;
    opacity: 0.8;
`;

const Text = styled.span<{ isBlock: boolean; isStrong: boolean }>`
    display: inline-block;

    ${({ isStrong }) => isStrong && `font-weight: ${FONT_WEIGHT.BOLD}`};
    ${({ isBlock }) => isBlock && `display: block`};

    &:not(:last-child) {
        margin-right: 0.2rem;
    }

    span:not(:last-child) {
        margin-right: 0.2rem;
    }
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

const ButtonArea = styled.div`
    ${device.pc`
        display: none;
    `};
    ${device.sp`
        align-items: center;
        display: flex;
        justify-content: center;
        margin: 0 .8rem;
        padding-bottom: .8rem;
    `};
`;

const SecondaryButton = styled(BaseSecondaryButton)`
    ${device.sp`
        font-size: ${FONT.MEDIUM};
        font-weight: ${FONT_WEIGHT.BOLD};
        height: 2.1rem;
        width: 100%;
        
        div {
            height: 100%;
        }
    `};
`;

export { PersonalInfo, Header, UserDataArea, Heading, Text, IconWrapper, MaterialIcon, ButtonArea, SecondaryButton };
