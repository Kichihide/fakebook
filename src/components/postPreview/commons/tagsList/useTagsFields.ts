import { MarkdownRemarkFields } from 'types/graphql-types';

export interface TagsFields {
    tags: Array<Tag>;
}

interface Tag {
    key: number;
    value: string;
}

function isTag(arg: any): arg is Tag {
    if (arg == undefined) {
        return false;
    }
    return typeof arg.key === 'number' && typeof arg.value === 'string';
}

function isTagsFields(arg: any): arg is Array<Tag> {
    if (arg == undefined) {
        return false;
    }
    return arg.every((v: any) => isTag(v));
}

const useTagsFields = (fields: MarkdownRemarkFields): [TagsFields] | [undefined] => {
    const { tags } = fields;

    if (!isTagsFields(tags)) {
        return [undefined];
    }

    return [{ tags: tags }];
};

export default useTagsFields;
