import { GatsbyImageSharpFluidFragment, ImageSharpEdge } from 'types/graphql-types';
import { isGatsbyImageSharpFluidFragment } from '@commons/typeUtils/imageConnection/typeGuard';

/**
 * Local Function
 */
function getFileNameFromSrc(src: string): string {
    const names = src.split('/');
    return names[names.length - 1];
}

/**
 * Export Function
 */
function getGatsbyImageSharpFluidFragment(
    edges: Array<ImageSharpEdge>,
    fileName: string
): GatsbyImageSharpFluidFragment | undefined {
    const target = edges.find((edge: ImageSharpEdge) => {
        const { fluid } = edge.node;
        return fluid && getFileNameFromSrc(fluid.src) === fileName;
    });

    return target && isGatsbyImageSharpFluidFragment(target.node.fluid) ? target.node.fluid : undefined;
}

function getGatsbyImageSharpFluidFragmentList(
    edges: Array<ImageSharpEdge>,
    fileNames: Array<string>
): Array<{ fileName: string; fragment: GatsbyImageSharpFluidFragment }> | undefined {
    const filteredEdges = edges.filter((edge: ImageSharpEdge) => {
        const { fluid } = edge.node;
        if (!fluid) {
            return false;
        }
        return fileNames.includes(getFileNameFromSrc(fluid.src));
    });

    const targets = _.compact(
        filteredEdges.map((edge: ImageSharpEdge) => {
            const { fluid } = edge.node;
            if (!fluid) {
                return false;
            }

            const name = getFileNameFromSrc(fluid.src);
            if (fileNames.includes(name) && isGatsbyImageSharpFluidFragment(fluid)) {
                return {
                    fileName: name,
                    fragment: fluid,
                };
            }
        })
    );

    return targets ? targets : undefined;
}

export { getGatsbyImageSharpFluidFragment, getGatsbyImageSharpFluidFragmentList };
