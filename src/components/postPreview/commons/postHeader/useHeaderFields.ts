import { MarkdownRemarkFields } from 'types/graphql-types';

export interface HeaderFields {
    contributor: string;
    date: string;
}

const useHeaderFields = (fields: MarkdownRemarkFields): [HeaderFields] | [undefined] => {
    const { contributor, date } = fields;

    if (!contributor || !date) {
        return [undefined];
    }

    return [{ contributor: contributor, date: date }];
};

export default useHeaderFields;
