import styled from 'styled-components';
import { COLOR } from '@styles/define';

const BaseThumbnailIconWrapper = styled.div`
    border: 4px solid ${COLOR.ICON_THUMBNAIL_BORDER};
    border-radius: 50%;
    margin: 0 auto;
    overflow: hidden;
`;

const setImgSize = (imgHeight: string, imgWidth: string) => {
    return `
        height: ${imgHeight};
        width: ${imgWidth};
        
        img {
            height: ${imgHeight} !important;
            width: ${imgWidth} !important;
        }
    `;
};

const setThumbnailIconSize = (diameter: string) => {
    return `
        height: ${diameter};
        width: ${diameter};
        
        img {
            height: ${diameter} !important;
            width: ${diameter} !important;
        }
    `;
};

export { BaseThumbnailIconWrapper, setImgSize, setThumbnailIconSize };
