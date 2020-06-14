import * as React from 'react';
import Img, { FluidObject } from 'gatsby-image';
import { GatsbyImageSharpFluidFragment } from 'types/graphql-types';

function createFluidObject(
    fluid: GatsbyImageSharpFluidFragment
): FluidObject | null {
    const { aspectRatio, src, srcSet, sizes, base64 } = fluid;

    if (!base64) {
        return null;
    }

    return {
        aspectRatio: aspectRatio,
        src: src,
        srcSet: srcSet,
        sizes: sizes,
        base64: base64,
    };
}

/**
 * Image wrapper
 */
type ImageProps = {
    alt: string;
    fluid: GatsbyImageSharpFluidFragment;
};

const Image: React.FC<ImageProps> = ({ alt, fluid }) => {
    const fluidObject = createFluidObject(fluid);
    if (!fluidObject) {
        return null;
    }

    return <Img alt={alt} fluid={fluidObject} />;
};

export { Image };
