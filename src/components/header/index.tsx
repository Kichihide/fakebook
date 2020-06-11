import * as React from 'react';
import { Image } from '@components/image';
import { GatsbyImageSharpFluidFragment } from 'types/graphql-types';

import { HeaderWrapper, IconWrapper, MaterialIcon } from './style';

// Todo: Netlifyデプロイのため暫定対応
const BigNumber = require('bignumber.js').default;

type Props = {
    fLogoImageFluid: GatsbyImageSharpFluidFragment;
};

const Header: React.FC<Props> = ({ fLogoImageFluid }) => {
    // Todo: レスポンシブ対応
    const height = '1.1';
    const width = new BigNumber(height).times(fLogoImageFluid.aspectRatio);
    const imgStyle = {
        height: height.toString() + 'rem',
        width: width.toString() + 'rem',
    };

    return (
        <HeaderWrapper>
            <Image
                fluid={fLogoImageFluid}
                alt="f-logo"
                imgStyle={imgStyle}
                wrapperStyle={imgStyle}
            />
            <IconWrapper onClick={() => alert('To be released.')}>
                <MaterialIcon>search</MaterialIcon>
            </IconWrapper>
        </HeaderWrapper>
    );
};

export default Header;
