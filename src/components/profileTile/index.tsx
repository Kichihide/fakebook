import * as React from 'react';
import { Image, ThumbnailIcon } from '@components/image';
import { GatsbyImageSharpFluidFragment } from 'types/graphql-types';
import Row from './Row';

import {
    ProfileTileWrapper,
    BackgroundImage,
    NameContainer,
    Name,
    UserDataContainer,
    Text,
    ButtonContainer,
    Button,
    ThumbnailContainer,
} from './style';

type Props = {
    profileBackImageFluid: GatsbyImageSharpFluidFragment;
    thumbnailImageFluid: GatsbyImageSharpFluidFragment;
};

const ProfileTile: React.FC<Props> = ({
    profileBackImageFluid,
    thumbnailImageFluid,
}) => {
    return (
        <ProfileTileWrapper>
            <BackgroundImage>
                <Image
                    alt="profile-back"
                    fluid={profileBackImageFluid}
                    imgHeight="10rem"
                    imgWidth="100vw"
                />
            </BackgroundImage>
            <NameContainer>
                <Name>鵜木 義秀</Name>
            </NameContainer>
            <UserDataContainer>
                <Row iconType="business_center" isEvenRow={true}>
                    <Text isBlock={true} isStrong={true}>
                        シンプレクス株式会社
                    </Text>
                    <Text isBlock={false} isStrong={false}>
                        フロントエンドエンジニア 兼 デザイナー
                    </Text>
                </Row>
                <Row iconType="business_center" isEvenRow={true}>
                    <Text isBlock={true} isStrong={false}>
                        以前の職業
                    </Text>
                    <Text isBlock={false} isStrong={true}>
                        株式会社ジーニー
                    </Text>
                    <Text isBlock={false} isStrong={false}>
                        {' 営業・Web広告運用'}
                    </Text>
                </Row>
                <Row iconType="home" isEvenRow={false}>
                    <Text isBlock={false} isStrong={true}>
                        東京都 渋谷区
                    </Text>
                    <Text isBlock={false} isStrong={false}>
                        在住
                    </Text>
                </Row>
                <Row iconType="location_on" isEvenRow={false}>
                    <Text isBlock={false} isStrong={true}>
                        大阪府 大阪狭山市
                    </Text>
                    <Text isBlock={false} isStrong={false}>
                        出身
                    </Text>
                </Row>
                <Row iconType="favorite" isEvenRow={false}>
                    <Text isBlock={false} isStrong={false}>
                        既婚
                    </Text>
                </Row>
            </UserDataContainer>
            <ButtonContainer>
                <Button onClick={() => alert('To be released.')}>
                    基本データを見る
                </Button>
            </ButtonContainer>
            <ThumbnailContainer>
                <ThumbnailIcon fluid={thumbnailImageFluid} diameter="9rem" />
            </ThumbnailContainer>
        </ProfileTileWrapper>
    );
};

export default ProfileTile;
