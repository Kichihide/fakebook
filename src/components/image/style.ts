import styled from 'styled-components';
import { COLOR } from '@styles/define';

const ImageWrapper = styled.div<{
    imgHeight?: string;
    imgWidth?: string;
}>`
    ${({ imgHeight, imgWidth }) =>
        imgHeight &&
        imgWidth &&
        `height: ${imgHeight}; 
        width: ${imgWidth};
    
        img {
            height: ${imgHeight} !important;
            width: ${imgWidth} !important;
        }`}
`;

const ThumbnailIconWrapper = styled.div<{ diameter: string }>`
    border: 4px solid ${COLOR.ICON_THUMBNAIL_BORDER};
    border-radius: 50%;
    margin: 0 auto;
    overflow: hidden;

    ${({ diameter }) => `
        height: ${diameter};
        width: ${diameter};
        
        img {
            height: ${diameter} !important;
            width: ${diameter} !important;
        }
    `}
`;

export { ImageWrapper, ThumbnailIconWrapper };
