import { GatsbyImageSharpFluidFragment, ImageSharpConnection, ImageSharpEdge } from 'types/graphql-types';

function isImageSharpConnection(arg: any): arg is ImageSharpConnection {
    if (arg == undefined) {
        return false;
    }
    return arg.edges.every((edge: ImageSharpEdge) => {
        if (!edge.node) {
            return false;
        }
        const { fluid, fixed } = edge.node;
        return fluid || fixed;
    });
}

function isGatsbyImageSharpFluidFragment(arg: any): arg is GatsbyImageSharpFluidFragment {
    if (arg == undefined) {
        return false;
    }

    const { base64, aspectRatio, src, srcSet, sizes } = arg;
    return base64 && aspectRatio && src && srcSet && sizes;
}

export { isImageSharpConnection, isGatsbyImageSharpFluidFragment };
