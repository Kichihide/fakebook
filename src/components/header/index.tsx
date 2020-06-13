import * as React from 'react';
import { Image } from '@components/image';
import { GatsbyImageSharpFluidFragment } from 'types/graphql-types';

import { HeaderWrapper, IconWrapper, MaterialIcon } from './style';

type Props = {
    fLogoImageFluid: GatsbyImageSharpFluidFragment;
};

const Header: React.FC<Props> = ({ fLogoImageFluid }) => {
    return (
        <HeaderWrapper>
            <Image
                alt="f-logo"
                fluid={fLogoImageFluid}
                imgHeight="auto"
                imgWidth="5.5rem"
            />
            <IconWrapper onClick={() => alert('To be released.')}>
                <MaterialIcon>search</MaterialIcon>
            </IconWrapper>
        </HeaderWrapper>
    );
};

export default Header;
