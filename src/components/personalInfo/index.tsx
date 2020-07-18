import React, { FC } from 'react';
import usePersonalData, { PersonalData } from '@components/personalInfo/usePersonalData';
import RowContainer from '@components/personalInfo/commons/Row';
import { JsonJsonProfile } from 'types/graphql-types';

import { PersonalInfo, Header, UserDataArea, Heading, Text, ButtonArea, SecondaryButton } from './style';

interface ContainerProps {
    jsonJsonProfile: JsonJsonProfile;
}

const PersonalInfoContainer: FC<ContainerProps> = ({ jsonJsonProfile }) => {
    const [personalData] = usePersonalData(jsonJsonProfile);

    if (!personalData) {
        // Todo: データ不備時の画面表示
        return null;
    }

    return <PersonalInfoComponent personalData={personalData} />;
};

interface PersonalInfoProps {
    personalData: PersonalData;
}

const PersonalInfoComponent: FC<PersonalInfoProps> = ({ personalData }) => {
    return (
        <PersonalInfo>
            <Header>自己紹介</Header>
            <UserDataArea>
                <RowContainer iconType="business_center" isEvenRow={true}>
                    <Text isBlock={true} isStrong={true}>
                        {personalData.work.company}
                    </Text>
                    <Text isBlock={false} isStrong={false}>
                        {personalData.work.job}
                    </Text>
                </RowContainer>
                {(() => {
                    return personalData.privateActivities.map((work: any) => {
                        return (
                            <RowContainer key={work.index} iconType="business_center" isEvenRow={true}>
                                <Heading>社外での活動</Heading>
                                <Text isBlock={false} isStrong={true}>
                                    {work.company}
                                </Text>
                                <Text isBlock={false} isStrong={false}>
                                    {work.job}
                                </Text>
                            </RowContainer>
                        );
                    });
                })()}
                {(() => {
                    return personalData.workHistory.map((work: any) => {
                        return (
                            <RowContainer key={work.index} iconType="business_center" isEvenRow={true}>
                                <Heading>以前の勤務先</Heading>
                                <Text isBlock={false} isStrong={true}>
                                    {work.company}
                                </Text>
                                <Text isBlock={false} isStrong={false}>
                                    {work.job}
                                </Text>
                            </RowContainer>
                        );
                    });
                })()}
                <RowContainer iconType="home" isEvenRow={false}>
                    <Text isBlock={false} isStrong={true}>
                        <span>{personalData.address.prefectures}</span>
                        <span>{personalData.address.city}</span>
                    </Text>
                    <Text isBlock={false} isStrong={false}>
                        在住
                    </Text>
                </RowContainer>
                <RowContainer iconType="location_on" isEvenRow={false}>
                    <Text isBlock={false} isStrong={true}>
                        <span>{personalData.homeTown.prefectures}</span>
                        <span>{personalData.homeTown.city}</span>
                    </Text>
                    <Text isBlock={false} isStrong={false}>
                        出身
                    </Text>
                </RowContainer>
                <RowContainer iconType="favorite" isEvenRow={false}>
                    <Text isBlock={false} isStrong={false}>
                        {personalData.marriage ? '既婚' : '未婚'}
                    </Text>
                </RowContainer>
            </UserDataArea>
            <ButtonArea>
                <SecondaryButton>
                    <div onClick={() => alert('To be released.')}>基本データを見る</div>
                </SecondaryButton>
            </ButtonArea>
        </PersonalInfo>
    );
};

export default PersonalInfoContainer;
