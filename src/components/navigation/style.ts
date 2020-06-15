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

const NavigationContainer = styled.div`
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
    ${device.pc`
        margin-right: 0.8rem;
    `};
    ${device.sp`
        width: 100%;
    `};
`;

const PrimaryButton = styled(BasePrimaryButton)`
    justify-content: center;

    ${device.pc`
        font-size: ${FONT.MEDIUM_LARGE};
        height: 1.8rem;
        padding: 0 1rem;
    `};
    ${device.sp`
        font-size: ${FONT.LARGE};
        height: 1.8rem;
        width: 100%;
    `};
`;

const MessengerIcon = styled.div`
    ${device.pc`
        margin-right: .4rem;
        ${() => setSquareImgSize('.8rem')}
    `};
    ${device.sp`
        margin-right: .4rem;
        ${() => setSquareImgSize('.85rem')}
    `};
`;

// TODO: スマホツールチップ表示
const SocialIconArea = styled.div`
    align-items: center;
    display: flex;

    ${device.sp`
        display: none;
    `};
`;

const TwitterIcon = styled.div`
    padding: 0.2rem;

    ${() => setCircleImgSize('1.6rem')}
`;

const GitHubIcon = styled.div`
    padding: 0.4rem;

    ${() => setCircleImgSize('1.2rem')}
`;

export {
    NavigationWrapper,
    NavigationContainer,
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
