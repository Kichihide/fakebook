import styled from 'styled-components';

const MaterialIcon = styled.i`
    direction: ltr;
    display: inline-block;
    font-family: 'Material Icons';

    /* Support for IE. */
    font-feature-settings: 'liga';
    font-size: 1rem;

    /* Support for all WebKit browsers. */
    -webkit-font-smoothing: antialiased;

    /* Support for Firefox. */
    -moz-osx-font-smoothing: grayscale;
    font-style: normal;
    font-weight: normal;
    letter-spacing: normal;
    line-height: 1;

    /* Support for Safari and Chrome. */
    text-rendering: optimizeLegibility;
    text-transform: none;
    white-space: nowrap;
    word-wrap: normal;
`;

const IconWrapper = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
`;

export { MaterialIcon, IconWrapper };
