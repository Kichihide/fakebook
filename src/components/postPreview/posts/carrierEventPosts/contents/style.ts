import styled from 'styled-components';
import { COLOR, FONT } from '@styles/define';
import { IconWrapper, MaterialIcon } from '@styles/core/font-icon';
import { setCircleImgSize } from '@components/image/style';

const ICON_SIZE = '2rem';

const BaseContentsWrapper = styled.div`
    align-items: center;
    display: flex;
    flex-flow: column;
    margin-bottom: 1.6rem;
`;

const BaseTitleArea = styled.div`
    position: relative;
    width: 100%;
`;

const BaseIconWrapper = styled(IconWrapper)`
    background-color: ${COLOR.POST_PREVIEW_CARRIER_EVENT_BUSINESS_ICON_WRAPPER_BACK};
    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.18), 0 2px 2px 0 rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.1);
    font-size: ${FONT.BASE};
    margin: auto;
    position: absolute;
    ${() => setCircleImgSize(ICON_SIZE)}
`;

const BaseMaterialIcon = styled(MaterialIcon)`
    color: ${COLOR.POST_PREVIEW_CARRIER_EVENT_BUSINESS_ICON};
    font-size: ${FONT.XXLARGE};
`;

const BaseContentsTitle = styled.h2`
    align-items: center;
    display: flex;
    font-size: ${FONT.XLARGE_XXLARGE};
    position: absolute;
    text-align: center;

    span {
        width: max-content;
    }
`;

export { ICON_SIZE, BaseContentsWrapper, BaseTitleArea, BaseIconWrapper, BaseMaterialIcon, BaseContentsTitle };
