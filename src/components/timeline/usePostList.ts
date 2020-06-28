import { MarkdownRemarkEdge } from 'types/graphql-types';

const usePostList = (postList: Array<MarkdownRemarkEdge>): [Array<MarkdownRemarkEdge>] => {
    // Todo: 降順以外のソート機能を実装
    const sortedPostList = _.orderBy(postList, ['node.frontmatter.id'], ['desc']);
    return [sortedPostList];
};

export default usePostList;
