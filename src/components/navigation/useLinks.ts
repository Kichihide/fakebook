import { JsonJsonLink } from 'types/graphql-types';

export interface Links {
    messenger: string;
    twitter: string;
    github: string;
}

function isLinks(arg: any): arg is Links {
    return arg && arg.messenger && arg.twitter && arg.github;
}

const useLinks = (jsonJsonLink: JsonJsonLink): [Links] | [undefined] => {
    if (!isLinks(jsonJsonLink)) {
        return [undefined];
    }
    return [
        {
            messenger: jsonJsonLink.messenger,
            twitter: jsonJsonLink.twitter,
            github: jsonJsonLink.github,
        },
    ];
};

export default useLinks;
