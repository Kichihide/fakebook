import styled from 'styled-components';
import { COLOR } from '@styles/define';

const BaseThumbnailIconWrapper = styled.div`
    border: 4px solid ${COLOR.THUMBNAIL_BORDER};
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

const setCircleImgSize = (diameter: string) => {
    return `
        border-radius: 50%;
        height: ${diameter};
        overflow: hidden;
        width: ${diameter};
        
        img {
            height: ${diameter} !important;
            width: ${diameter} !important;
        }
    `;
};

const setSquareImgSize = (diameter: string) => {
    return `
        height: ${diameter};
        width: ${diameter};
        
        img {
            height: ${diameter} !important;
            width: ${diameter} !important;
        }
    `;
};

export { BaseThumbnailIconWrapper, setImgSize, setCircleImgSize, setSquareImgSize };
