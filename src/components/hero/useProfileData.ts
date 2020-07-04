import { JsonJsonProfile } from 'types/graphql-types';

export interface Profile {
    name: {
        firstName: string;
        lastName: string;
    };
    romanNotation: {
        firstName: string;
        lastName: string;
    };
    shortMessage: string;
}

const useProfileData = (jsonJsonProfile: JsonJsonProfile): [Profile] | [undefined] => {
    const { name, romanNotation, shortMessage } = jsonJsonProfile;

    if (
        !name ||
        !name.firstName ||
        !name.lastName ||
        !romanNotation ||
        !romanNotation.firstName ||
        !romanNotation.lastName ||
        !shortMessage
    ) {
        return [undefined];
    }

    return [
        {
            name: {
                firstName: name.firstName,
                lastName: name.lastName,
            },
            romanNotation: {
                firstName: romanNotation.firstName,
                lastName: romanNotation.lastName,
            },
            shortMessage: shortMessage,
        },
    ];
};

export default useProfileData;
