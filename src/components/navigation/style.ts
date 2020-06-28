import styled from 'styled-components';
import device from '@styles/core/media';
import { COLOR, CONTENTS, FONT, FONT_WEIGHT } from '@styles/define';
import { setCircleImgSize, setSquareImgSize } from '@components/image/style';
import { PrimaryButton as BasePrimaryButton } from '@styles/components/button';

const NavigationWrapper = styled.div`
    background-color: ${COLOR.NAVIGATION_BACK};

    ${device.pc`
        box-shadow: ${CONTENTS.BOX_SHADOW};
    `};
`;

const Navigation = styled.div`
    display: flex;
    max-width: calc(${CONTENTS.MAX_WIDTH} * 0.93);

    ${device.pc`
        border-top: 1px solid ${COLOR.SEPARATE_BORDER};
        justify-content: space-between;
        margin: 0 auto;
    `};
    ${device.sp`
        justify-content: center;
        padding: .8rem;
    `};
`;

const MenuArea = styled.nav`
    ${device.sp`
        display: none;
    `};
`;

const Menu = styled.ul`
    ${device.pc`
        font-size: ${FONT.MEDIUM_LARGE};
        font-weight: ${FONT_WEIGHT.BOLD};
        display: flex;
        margin: 0;
        padding-inline-start: 0;
    `};
`;

const MenuItem = styled.li<{ active: boolean }>`
    ${({ active }) =>
        device.pc &&
        `
        border-bottom: ${active ? `3px solid ${COLOR.MENU_ACTIVE}` : 'none'};
        color: ${active ? `${COLOR.MENU_ACTIVE}` : `${COLOR.MENU_INACTIVE}`};
    `};
    ${device.pc`
        align-items: center;
        display: flex;
        height: 3rem;
        padding: 0 1.8rem;
    `};
`;

const ContentsWrapper = styled.div`
    align-items: center;
    display: flex;

    ${device.sp`
        width: 100%;
    `};
`;

const ButtonArea = styled.div`
    margin-right: 0.8rem;

    ${device.sp`
        width: 100%;
    `};
`;

const PrimaryButton = styled(BasePrimaryButton)`
    height: 1.8rem;
    font-weight: ${FONT_WEIGHT.BOLD};

    a {
        height: 100%;
    }

    ${device.pc`
        font-size: ${FONT.MEDIUM_LARGE};
        
        a {
            padding: 0 1rem;
        }
    `};
    ${device.sp`
        font-size: ${FONT.LARGE};
        width: 100%;
    `};
`;

const MessengerIcon = styled.div`
    margin-right: 0.4rem;

    ${device.pc`
        ${() => setSquareImgSize('.8rem')}
    `};
    ${device.sp`
        ${() => setSquareImgSize('.85rem')}
    `};
`;

const SocialIconArea = styled.div`
    align-items: center;
    display: flex;
`;

const BaseSocialIconStyle = styled.div`
    &:hover {
        background-color: rgba(0, 0, 0, 0.12);
        cursor: pointer;
        transition: all 0.5s ease;
    }

    &:focus {
        background-color: rgba(0, 0, 0, 0.12);
        outline: none;
        transition: all 0.3s ease;
    }
`;

const TwitterIcon = styled(BaseSocialIconStyle)`
    padding: 0.2rem;

    ${() => setCircleImgSize('1.6rem')}
`;

const GitHubIcon = styled(BaseSocialIconStyle)`
    padding: 0.4rem;

    ${() => setCircleImgSize('1.2rem')}
`;

export {
    NavigationWrapper,
    Navigation,
    MenuArea,
    Menu,
    MenuItem,
    ContentsWrapper,
    ButtonArea,
    PrimaryButton,
    MessengerIcon,
    SocialIconArea,
    TwitterIcon,
    GitHubIcon,
};
