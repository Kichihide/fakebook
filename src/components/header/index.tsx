import * as React from 'react';
import { Image } from '@components/image';
import { GatsbyImageSharpFluidFragment } from 'types/graphql-types';

const styles = require('./index.module.scss');

type Props = {
    fLogoImageFluid: GatsbyImageSharpFluidFragment;
};

const Header: React.FC<Props> = ({ fLogoImageFluid }) => {
    // Todo: レスポンシブ対応
    const diameter = '36px';
    const imgStyle = { height: diameter, width: diameter };

    return (
        <header className={styles.header}>
            <Image fluid={fLogoImageFluid} alt="f-logo" imgStyle={imgStyle} />
        </header>
    );
};

export default Header;
