import React, { FC, ComponentProps } from 'react';
import ImageContainer from '@components/image';
import { GatsbyImageSharpFluidFragment } from 'types/graphql-types';
import {
    Header,
    ImageWrapper,
    // IconWrapper,
    // MaterialIcon
} from './style';

type ContainerProps = ComponentProps<typeof HeaderComponent>;

const HeaderContainer: FC<ContainerProps> = (props: ContainerProps) => {
    return <HeaderComponent {...props} />;
};

interface HeaderProps {
    fakeBookLogoImageFluid: GatsbyImageSharpFluidFragment;
}

const HeaderComponent: FC<HeaderProps> = ({ fakeBookLogoImageFluid }) => {
    return (
        <Header>
            <ImageWrapper>
                <ImageContainer alt="fakebook-logo" fluid={fakeBookLogoImageFluid} />
            </ImageWrapper>
            {/*<IconWrapper onClick={() => alert('To be released.')}>*/}
            {/*<MaterialIcon>search</MaterialIcon>*/}
            {/*</IconWrapper>*/}
        </Header>
    );
};

export default HeaderContainer;
