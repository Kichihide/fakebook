import * as React from 'react';
import Img, { FluidObject } from 'gatsby-image';
import { GatsbyImageSharpFluidFragment } from 'types/graphql-types';

const styles = require('./index.module.scss');

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
    wrapperStyle?: {};
};

const Image: React.FC<ImageProps> = ({
    fluid,
    alt,
    imgStyle,
    wrapperStyle,
}) => {
    const fluidObject = createFluidObject(fluid);
    if (!fluidObject) {
        return null;
    }

    return (
        <Img
            alt={alt}
            style={wrapperStyle}
            fluid={fluidObject}
            imgStyle={imgStyle}
        />
    );
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

    const wrapperStyle = { height: diameter, width: diameter };
    const imgStyle = wrapperStyle;
    return (
        <Img
            alt="thumbnail"
            className={styles.thumbnailIcon}
            style={wrapperStyle}
            fluid={fluidObject}
            imgStyle={imgStyle}
        />
    );
};

export { Image, ThumbnailIcon };
