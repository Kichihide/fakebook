import React, { FC, Fragment } from 'react';
import useTagsFields, { TagsFields } from '@components/postPreview/commons/tagsList/useTagsFields';
import { MarkdownRemarkFields } from 'types/graphql-types';
import { Tag } from './style';

interface ContainerProps {
    fields: MarkdownRemarkFields;
}

const TagsListContainer: FC<ContainerProps> = ({ fields }) => {
    const [tagFields] = useTagsFields(fields);

    if (!tagFields) {
        // Todo: データ不備時の画面表示
        return null;
    }
    return <TagsListComponent tagsFields={tagFields} />;
};

interface TagListProps {
    tagsFields: TagsFields;
}

const TagsListComponent: FC<TagListProps> = ({ tagsFields }) => {
    return (
        <Fragment>
            {(() => {
                return tagsFields.tags.map((tag: { key: number; value: string }) => {
                    return <Tag key={tag.key}>{tag.value}</Tag>;
                });
            })()}
        </Fragment>
    );
};

export default TagsListContainer;
