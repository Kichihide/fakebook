import styled from 'styled-components';
import device from '@styles/core/media';
import { COLOR, FONT, FONT_WEIGHT, CONTENTS } from '@styles/define';
import { MaterialIcon as BaseMaterialIcon } from '@styles/core/font-icon';
import { setCircleImgSize, BaseThumbnailIconWrapper } from '@components/image/style';

const PostPreview = styled.article`
    background-color: ${COLOR.POST_PREVIEW_BACK};
    font-size: ${FONT.MEDIUM};

    ${device.pc`
        border-radius: ${CONTENTS.BORDER_RADIUS};
        box-shadow: ${CONTENTS.BOX_SHADOW};
        margin-bottom: ${CONTENTS.GAP_PC};
    `};
    ${device.sp`
        margin-bottom: ${CONTENTS.GAP_SP};
    `};
`;

const Header = styled.header`
    align-items: center;
    display: flex;
    height: 2.5rem;
    margin-bottom: 0.4rem;
    padding: 0.2rem 0.3rem 0;
`;

const ThumbnailArea = styled.div`
    margin-right: 0.2rem;
`;

const ThumbnailIconWrapper = styled(BaseThumbnailIconWrapper)`
    ${() => setCircleImgSize('1.8rem')}
`;

const MetaInfoArea = styled.div`
    align-items: flex-start;
    display: flex;
    flex-flow: column;
    height: 1.8rem;
    justify-content: center;
`;

const Name = styled.h3`
    font-size: ${FONT.MEDIUM};
    font-wight: ${FONT_WEIGHT.BOLD};
    margin: 0 0 0.05rem;
`;

const DateWrapper = styled.span`
    align-items: center;
    color: ${COLOR.ICON_DATE};
    display: flex;
    font-size: ${FONT.BASE};
`;

const Date = styled.span`
    &::after {
        content: '・';
    }
`;

const MaterialIcon = styled(BaseMaterialIcon)`
    color: ${COLOR.ICON_DATE};
    font-size: ${FONT.MEDIUM};
`;

const Contents = styled.div`
    padding: 0 0.6rem 1rem;

    div,
    p {
        text-align: start;
        white-space: pre-wrap;
    }

    p {
        margin: 0;
    }

    ul {
        padding-inline-start: 1rem;
    }
`;

export {
    PostPreview,
    Header,
    ThumbnailArea,
    ThumbnailIconWrapper,
    MetaInfoArea,
    Name,
    DateWrapper,
    Date,
    MaterialIcon,
    Contents,
};
