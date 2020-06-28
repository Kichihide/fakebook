import { JsonJsonSiteConfig, JsonJsonLink, JsonJsonProfile } from 'types/graphql-types';

function isJsonJsonSiteConfig(arg: any): arg is JsonJsonSiteConfig {
    if (arg == undefined) {
        return false;
    }
    return arg.siteTitle;
}

function isJsonJsonLink(arg: any): arg is JsonJsonLink {
    if (arg == undefined) {
        return false;
    }
    return arg.messenger && arg.twitter && arg.github;
}

function isJsonJsonProfile(arg: any): arg is JsonJsonProfile {
    if (arg == undefined) {
        return false;
    }
    return arg.name && arg.romanNotation && arg.shortMessage;
}

export { isJsonJsonSiteConfig, isJsonJsonLink, isJsonJsonProfile };
