import { JsonJsonSiteConfig, JsonJsonProfile } from 'types/graphql-types';

function isJsonJsonSiteConfig(arg: any): arg is JsonJsonSiteConfig {
    if (arg == undefined) {
        return false;
    }
    return arg.siteTitle;
}

function isJsonJsonProfile(arg: any): arg is JsonJsonProfile {
    if (arg == undefined) {
        return false;
    }
    return arg.name && arg.romanNotation && arg.shortMessage;
}

export { isJsonJsonSiteConfig, isJsonJsonProfile };
