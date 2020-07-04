import React, { FC } from 'react';
import useTagsFields, { TagsFields } from '@components/postPreview/commons/TagList/useTagsFields';
import { MarkdownRemarkFields } from 'types/graphql-types';
import { Tag } from './style';

interface ContainerProps {
    fields: MarkdownRemarkFields;
}

const TagListContainer: FC<ContainerProps> = ({ fields }) => {
    const [tagFields] = useTagsFields(fields);

    if (!tagFields) {
        // Todo: データ不備時の画面表示
        return null;
    }
    return <TagListComponent tagsFields={tagFields} />;
};

interface PostHeaderProps {
    tagsFields: TagsFields;
}

const TagListComponent: FC<PostHeaderProps> = ({ tagsFields }) => {
    return tagsFields.tags.map((tag: { key: number; value: string }) => {
        return <Tag key={tag.key}>{tag.value}</Tag>;
    });
};

export default TagListContainer;
