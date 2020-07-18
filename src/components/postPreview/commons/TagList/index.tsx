import React, { FC, Fragment } from 'react';
import useTagsFields, { TagsFields } from '@components/postPreview/commons/tagList/useTagsFields';
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

interface TagListProps {
    tagsFields: TagsFields;
}

const TagListComponent: FC<TagListProps> = ({ tagsFields }) => {
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

export default TagListContainer;
