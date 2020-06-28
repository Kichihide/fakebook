import { FluidObject } from 'gatsby-image';
import { GatsbyImageSharpFluidFragment } from 'types/graphql-types';

const useFluidObject = (fluid: GatsbyImageSharpFluidFragment): [FluidObject] | [undefined] => {
    const { aspectRatio, src, srcSet, sizes, base64 } = fluid;

    if (!base64) {
        return [undefined];
    }

    return [
        {
            aspectRatio: aspectRatio,
            src: src,
            srcSet: srcSet,
            sizes: sizes,
            base64: base64,
        },
    ];
};

export default useFluidObject;
