import styled, { createGlobalStyle } from 'styled-components';
import device from '@styles/core/media';
import { CONTENTS, COLOR } from '@styles/define';

const GlobalStyle = createGlobalStyle`
    html, body, code, kbd, samp, tt, pre, code,
    h1, h2, h3, h4, h5, h6 {
        color: ${COLOR.BASE_TEXT};
        font-family: system-ui, -apple-system, BlinkMacSystemFont, '.SFNSText-Regular', "hiragino kaku gothic pro",meiryo,"ms pgothic",sans-serif;
    }

    html {
        font-size: 20px;
    }
    
    body {
        margin: 0;
    }
        
    h1, h2, h3, h4, h5, h6 {
        margin: 0;
    }
    
    ul {
        list-style-type: none;
    }
    
    a {
        color: unset;
        text-decoration: none;
        
        &:hover {
            transition: all 0.5s ease;
        }
    }

    ${device.pc`
        body {
          background-color: #f0f2f5;
        }
    `};
    ${device.sp`
        body {
          background-color: #dbdde0;
        }
    `};
`;

const MyPageContainer = styled.div``;

const ContentsArea = styled.div`
    margin: 0 auto;
    max-width: calc(${CONTENTS.MAX_WIDTH} * 0.93);

    ${device.pc`
        display: grid;
        grid-template-columns: 19rem 1fr;
        grid-column-gap: ${CONTENTS.GAP_PC};
        padding: ${CONTENTS.GAP_PC} 1.2rem;
    `};
`;

export { GlobalStyle, MyPageContainer, ContentsArea };
