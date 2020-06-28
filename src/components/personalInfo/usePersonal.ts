import { JsonJsonProfile } from 'types/graphql-types';

export type Work = {
    index: number;
    company: string;
    job: string;
    term: {
        from: {
            year: number;
            month: number;
        };
        to?: {
            year: number;
            month: number;
        };
    };
};

export type PersonalData = {
    work: Work;
    privateActivities: Array<Work>;
    workHistory: Array<Work>;
    address: {
        prefectures: string;
        city: string;
    };
    homeTown: {
        prefectures: string;
        city: string;
    };
    marriage: boolean;
};

function isWork(arg: any): arg is Work {
    return (
        arg &&
        arg.index &&
        arg.company &&
        arg.job &&
        arg.term &&
        arg.term.from &&
        arg.term.from.year &&
        arg.term.from.month
    );
}

function isWorkList(arg: any): arg is Array<Work> {
    if (arg == undefined || arg.length === 0) {
        return false;
    }
    return arg.every((work: any) => isWork(work));
}

const usePersonal = (jsonJsonProfile: JsonJsonProfile): [PersonalData] | [undefined] => {
    const { work, privateActivities, workHistory, address, homeTown, marriage } = jsonJsonProfile;

    if (
        !isWork(work) ||
        !isWorkList(privateActivities) ||
        !isWorkList(workHistory) ||
        !address ||
        !address.prefectures ||
        !address.city ||
        !homeTown ||
        !homeTown.prefectures ||
        !homeTown.city ||
        typeof marriage !== 'boolean'
    ) {
        return [undefined];
    }

    return [
        {
            work: {
                index: work.index,
                company: work.company,
                job: work.job,
                term: {
                    from: {
                        year: work.term.from.year,
                        month: work.term.from.month,
                    },
                },
            },
            privateActivities: _.orderBy(privateActivities, ['index'], ['asc']),
            workHistory: _.orderBy(workHistory, ['index'], ['asc']),
            address: {
                prefectures: address.prefectures,
                city: address.city,
            },
            homeTown: {
                prefectures: homeTown.prefectures,
                city: homeTown.city,
            },
            marriage: marriage,
        },
    ];
};

export default usePersonal;
