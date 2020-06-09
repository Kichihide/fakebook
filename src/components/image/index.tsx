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
    fluid: GatsbyImageSharpFluidFragment;
    alt: string;
    imgStyle: {
        height: string;
        width: string;
    };
};

const Image: React.FC<ImageProps> = ({ fluid, alt, imgStyle }) => {
    const fluidObject = createFluidObject(fluid);
    if (!fluidObject) {
        return null;
    }

    return <Img alt={alt} fluid={fluidObject} imgStyle={imgStyle} />;
};

/**
 * Thumbnail icon
 */
type ThumbnailIconProps = {
    fluid: GatsbyImageSharpFluidFragment;
    diameter: string;
};

const ThumbnailIcon: React.FC<ThumbnailIconProps> = ({ fluid, diameter }) => {
    const fluidObject = createFluidObject(fluid);
    if (!fluidObject) {
        return null;
    }

    const imgStyle = { height: diameter, width: diameter };
    return <Img alt="thumbnail" fluid={fluidObject} imgStyle={imgStyle} />;
};

export { Image, ThumbnailIcon };
