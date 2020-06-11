import * as React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@components/header';
import { GatsbyImageSharpFluidFragment } from 'types/graphql-types';

type Props = {
    title?: string | null;
    fLogoImageFluid: GatsbyImageSharpFluidFragment;
    children: any;
};

const Layouts: React.FC<Props> = ({ title, fLogoImageFluid, children }) => {
    return (
        <div id="page">
            {(() => {
                if (title) {
                    return <Helmet title={title} />;
                }
            })()}
            <Header fLogoImageFluid={fLogoImageFluid} />
            <div>{children}</div>
        </div>
    );
};

export default Layouts;
