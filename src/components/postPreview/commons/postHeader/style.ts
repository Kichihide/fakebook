import styled from 'styled-components';
import { COLOR, FONT, FONT_WEIGHT } from '@styles/define';
import { MaterialIcon as BaseMaterialIcon } from '@styles/core/font-icon';
import { setCircleImgSize, BaseThumbnailIconWrapper } from '@components/image/style';

const PostHeader = styled.header`
    align-items: center;
    display: flex;
    height: 2.5rem;
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
    font-weight: ${FONT_WEIGHT.BOLD};
    margin: 0 0 0.05rem;
`;

const DateWrapper = styled.span`
    align-items: center;
    display: flex;
    font-size: ${FONT.BASE};
`;

const Date = styled.span`
    color: ${COLOR.POST_PREVIEW_HEADER_DATE_TEXT};

    &::after {
        content: '・';
    }
`;

const MaterialIcon = styled(BaseMaterialIcon)`
    color: ${COLOR.POST_PREVIEW_HEADER_DATE_ICON};
    font-size: ${FONT.MEDIUM};
`;

export { PostHeader, ThumbnailArea, ThumbnailIconWrapper, MetaInfoArea, Name, DateWrapper, Date, MaterialIcon };
