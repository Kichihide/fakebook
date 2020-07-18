import { useState, useEffect } from 'react';
import { MarkdownRemarkFields } from 'types/graphql-types';

export interface ContentsState {
    isOpen: boolean;
    isInitial: boolean;
    toggleOpen: () => void;
    date: string;
    job: string;
    title: string;
    html: any;
}

const useContentsState = (fields: MarkdownRemarkFields, html: any): [ContentsState] | [undefined] => {
    const [isOpen, setIsOpen] = useState(false);
    const [isInitial, setIsInitial] = useState(true);
    const toggleOpen = () => {
        if (html !== '') {
            setIsOpen(!isOpen);
        }
    };

    useEffect(() => setIsInitial(false), []);

    if (!fields || !fields.title || !fields.date || !fields.job) {
        return [undefined];
    }

    return [
        {
            isOpen: isOpen,
            isInitial: isInitial,
            toggleOpen: toggleOpen,
            date: fields.date,
            job: fields.job,
            title: fields.title,
            html: html,
        },
    ];
};

export default useContentsState;
