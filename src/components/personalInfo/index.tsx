import * as React from 'react';
import Row from './sub/Row';
import {
    PersonalInfoContainer,
    UserDataArea,
    Text,
    ButtonArea,
    Button,
} from './style';

type Props = {};

const PersonalInfo: React.FC<Props> = ({}) => {
    // Todo: Json定義
    return (
        <PersonalInfoContainer>
            <UserDataArea>
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
            </UserDataArea>
            <ButtonArea>
                <Button onClick={() => alert('To be released.')}>
                    基本データを見る
                </Button>
            </ButtonArea>
        </PersonalInfoContainer>
    );
};

export default PersonalInfo;
