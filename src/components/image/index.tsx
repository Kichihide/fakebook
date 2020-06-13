import * as React from 'react';
import Img, { FluidObject } from 'gatsby-image';
import { GatsbyImageSharpFluidFragment } from 'types/graphql-types';

import { ImageWrapper, ThumbnailIconWrapper } from './style';

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
    imgHeight?: string;
    imgWidth?: string;
};

const Image: React.FC<ImageProps> = ({ fluid, alt, imgHeight, imgWidth }) => {
    const fluidObject = createFluidObject(fluid);
    if (!fluidObject) {
        return null;
    }

    return (
        <ImageWrapper imgHeight={imgHeight} imgWidth={imgWidth}>
            <Img alt={alt} fluid={fluidObject} />
        </ImageWrapper>
    );
};

/**
 * Thumbnail icon
 */
type ThumbnailIconProps = {
    fluid: GatsbyImageSharpFluidFragment;
    diameter: string;
    wrapperStyle?: {};
};

const ThumbnailIcon: React.FC<ThumbnailIconProps> = ({ fluid, diameter }) => {
    const fluidObject = createFluidObject(fluid);
    if (!fluidObject) {
        return null;
    }

    return (
        <ThumbnailIconWrapper diameter={diameter}>
            <Img alt="thumbnail" fluid={fluidObject} />
        </ThumbnailIconWrapper>
    );
};

export { Image, ThumbnailIcon };
