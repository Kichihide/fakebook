import { MarkdownRemarkConnection, MarkdownRemarkEdge } from 'types/graphql-types';

/**
 * Local Function
 */

/**
 * Export Function
 */
function isMarkdownRemarkConnection(arg: any): arg is MarkdownRemarkConnection {
    if (arg == undefined) {
        return false;
    }

    return arg.edges.every((edge: MarkdownRemarkEdge) => {
        const { fields, html } = edge.node;
        return fields && (fields.title || html);
    });
}

export { isMarkdownRemarkConnection };
