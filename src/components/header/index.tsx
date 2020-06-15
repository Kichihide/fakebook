import * as React from 'react';
import Image from '@components/image';
import { GatsbyImageSharpFluidFragment } from 'types/graphql-types';
import {
    HeaderContainer,
    ImageWrapper,
    IconWrapper,
    MaterialIcon,
} from './style';

type Props = {
    fakeBookLogoImageFluid: GatsbyImageSharpFluidFragment;
};

const Header: React.FC<Props> = ({ fakeBookLogoImageFluid }) => {
    return (
        <HeaderContainer>
            <ImageWrapper>
                <Image alt="fakebook-logo" fluid={fakeBookLogoImageFluid} />
            </ImageWrapper>
            <IconWrapper onClick={() => alert('To be released.')}>
                <MaterialIcon>search</MaterialIcon>
            </IconWrapper>
        </HeaderContainer>
    );
};

export default Header;
