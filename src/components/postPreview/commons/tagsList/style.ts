import styled from 'styled-components';
import { COLOR, FONT } from '@styles/define';

const BaseTagList = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const Tag = styled.span`
    align-items: center;
    color: ${COLOR.TAG_TEXT};
    display: flex;
    font-size: ${FONT.BASE};
    margin-right: 0.2rem;

    &::before {
        content: '#';
        margin-right: 0.1rem;
    }
`;

export { BaseTagList, Tag };
