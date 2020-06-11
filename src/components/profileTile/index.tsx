import * as React from 'react';
import { Image, ThumbnailIcon } from '@components/image';
import { GatsbyImageSharpFluidFragment } from 'types/graphql-types';
import Row from './Row';

import {
    ProfileTileWrapper,
    NameContainer,
    Name,
    UserDataContainer,
    Text,
    ButtonContainer,
    Button,
    ThumbnailIconWrapper,
} from './style';
import { IconWrapper } from '@componentsheader/style';

type Props = {
    profileBackImageFluid: GatsbyImageSharpFluidFragment;
    thumbnailImageFluid: GatsbyImageSharpFluidFragment;
};

const ProfileTile: React.FC<Props> = ({
    profileBackImageFluid,
    thumbnailImageFluid,
}) => {
    // Todo: レスポンシブ対応
    const widthForProfBack = window.parent.screen.width.toString();
    const heightForProfBack = new BigNumber(widthForProfBack).div(
        profileBackImageFluid.aspectRatio
    );

    const heightForProfBackWrapper = heightForProfBack.times(0.66);
    const imgStyleForProfBack = {
        height: heightForProfBack.toString() + 'px',
        width: widthForProfBack.toString() + 'px',
    };
    const wrapperStyleForProfBack = {
        height: heightForProfBackWrapper.toString() + 'px',
        maxHeight: heightForProfBack.toString() + 'px',
    };

    // Todo: レスポンシブ対応
    const diameterFroThumbnailImage = '9rem';

    return (
        <ProfileTileWrapper>
            <div>
                <Image
                    fluid={profileBackImageFluid}
                    alt="profile-back"
                    imgStyle={imgStyleForProfBack}
                    wrapperStyle={wrapperStyleForProfBack}
                />
            </div>
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
            <ThumbnailIconWrapper>
                <ThumbnailIcon
                    fluid={thumbnailImageFluid}
                    diameter={diameterFroThumbnailImage}
                />
            </ThumbnailIconWrapper>
        </ProfileTileWrapper>
    );
};

export default ProfileTile;
