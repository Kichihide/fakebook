import styled from 'styled-components';
import { COLOR, FONT, FONT_WEIGHT, MARGIN } from '@styles/define';
import { MaterialIcon as BaseMaterialIcon } from '@styles/font-icon';

const PostPreviewWrapper = styled.article`
    background-color: ${COLOR.POST_PREVIEW_BACK};
    font-size: ${FONT.MEDIUM};
    margin-bottom: ${MARGIN.BOTTOM_TIMELINE_CONTENT};
`;

const Header = styled.header`
    align-items: center;
    display: flex;
    height: 2.5rem;
    margin-bottom: 0.4rem;
    padding: 0.2rem 0.3rem 0;
`;

const ThumbnailIconWrapper = styled.div`
    margin-right: 0.2rem;
`;

const MetaInfo = styled.div<{ height: string }>`
    align-items: flex-start;
    display: flex;
    flex-flow: column;
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
    PostPreviewWrapper,
    Header,
    ThumbnailIconWrapper,
    MetaInfo,
    Name,
    DateWrapper,
    Date,
    MaterialIcon,
    Contents,
};
