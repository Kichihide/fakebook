import styled from 'styled-components';
import device from '@styles/core/media';
import { COLOR, CONTENTS, FONT, FONT_WEIGHT } from '@styles/define';

const BasePostPreview = styled.article`
    background-color: ${COLOR.POST_PREVIEW_BACK};
    font-size: ${FONT.MEDIUM};
    padding-bottom: 1rem;

    ${device.pc`
        border-radius: ${CONTENTS.BORDER_RADIUS};
        box-shadow: ${CONTENTS.BOX_SHADOW};
        margin-bottom: ${CONTENTS.GAP_PC};
    `};
    ${device.sp`
        margin-bottom: ${CONTENTS.GAP_SP};
    `};
`;

const BaseHeaderArea = styled.div`
    margin-bottom: 0.4rem;
    padding-top: 0.3rem;

    ${device.pc`
        padding-right: .5rem;
        padding-left: .5rem;
   `};
    ${device.sp`
        padding-right: .3rem;
        padding-left: .3rem;
    `};
`;

const BaseContentsArea = styled.div`
    ${device.pc`
        padding-right: .8rem;
        padding-left: .8rem;
   
   `};
    ${device.sp`
        padding-right: .6rem;
        padding-left: .6rem;
   `};
`;

const BaseContents = styled.div`
    div,
    p {
        text-align: start;
        white-space: pre-wrap;
    }

    p {
        margin: 0;

        &:not(:last-child) {
            margin-bottom: 0.6rem;
        }
    }

    ul {
        list-style-type: disc;
        padding-inline-start: 1rem;
    }

    .text {
        &.bold {
            font-weight: ${FONT_WEIGHT.BOLD};
        }

        &.underline {
            text-decoration: underline;
        }
    }
`;

export { BaseHeaderArea, BaseContentsArea, BasePostPreview, BaseContents };
