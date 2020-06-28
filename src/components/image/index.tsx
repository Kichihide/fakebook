import React, { FC } from 'react';
import Img, { FluidObject } from 'gatsby-image';
import useFluidObject from '@components/image/useFluidObject';
import { GatsbyImageSharpFluidFragment } from 'types/graphql-types';

interface ContainerProps {
    alt: string;
    fluid: GatsbyImageSharpFluidFragment;
}

const ImageContainer: FC<ContainerProps> = ({ alt, fluid }) => {
    const [fluidObject] = useFluidObject(fluid);
    if (!fluidObject) {
        // Todo: データ不備時の画面表示
        return null;
    }
    return <ImageComponent alt={alt} fluid={fluidObject} />;
};

interface ImageProps {
    alt: string;
    fluid: FluidObject;
}

const ImageComponent: FC<ImageProps> = ({ alt, fluid }) => {
    return <Img alt={alt} fluid={fluid} />;
};

export default ImageContainer;
