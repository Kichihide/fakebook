// Todo: styled-components theme 機能の活用

const BASE_CONTENT_BACK = '#ffffff';
const COLOR_PRIMARY = '#1876f2';
const BASE_TEXT_COLOR = '#050505';

const COLOR = {
    BASE_TEXT: BASE_TEXT_COLOR,
    CONTENT_BACK: '#ffffff',
    HEADER_BACK: '#3b5998',
    HERO_CONTENTS_BACK: BASE_CONTENT_BACK,
    NAVIGATION_BACK: BASE_CONTENT_BACK,
    POST_PREVIEW_BACK: BASE_CONTENT_BACK,
    SEPARATE_BORDER: '#c6c8cc',
    ICON_THUMBNAIL_BORDER: '#FFFFFF',
    ICON_USER_DATA_ROW: '#787878',
    ICON_DATE: '#787878',
    ICON_HEADER_SEARCH: 'rgba(255, 255, 255, .7)',
    HERO_MESSAGE: '#65676b',
    MENU_ACTIVE: COLOR_PRIMARY,
    MENU_INACTIVE: '#65676b',

    BUTTON_PRIMARY_BACK: COLOR_PRIMARY,
    BUTTON_PRIMARY_TEXT: '#ffffff',
    BUTTON_SECONDARY_BACK: '#e6f2ff',
    BUTTON_SECONDARY_TEXT: '#2c84f5',
};

const FONT = {
    XXXXLARGE: '1.6rem',
    XXXLARGE: '1.3rem',
    XXLARGE: '1.2rem',
    XLARGE: '.9rem',
    LARGE_XLARGE: '.85rem',
    LARGE: '.8rem',
    MEDIUM_LARGE: '.75rem',
    MEDIUM: '.7rem',
    BASE_MEDIUM: '.65rem',
    BASE: '.6rem',
    SMALL: '.55rem',
    XSMALL: '.5rem',
    TINY: '.4rem',
};

const FONT_WEIGHT = {
    NORMAL: 400,
    BOLD: 600,
};

const CONTENTS = {
    GAP_PC: '.8rem',
    GAP_SP: '.5rem',
    MAX_WIDTH: '52rem',
    BORDER_RADIUS: '.4rem',
    BOX_SHADOW: '0 1px 2px rgba(0, 0, 0, .2)',
};

export { COLOR, FONT, FONT_WEIGHT, CONTENTS };
