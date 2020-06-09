import * as React from 'react';
import { Image, ThumbnailIcon } from '@components/image';
import { GatsbyImageSharpFluidFragment } from 'types/graphql-types';

const styles = require('./index.module.scss');

type Props = {
    profileBackImageFluid: GatsbyImageSharpFluidFragment;
    thumbnailImageFluid: GatsbyImageSharpFluidFragment;
};

const ProfileTile: React.FC<Props> = ({
    profileBackImageFluid,
    thumbnailImageFluid,
}) => {
    // Todo: レスポンシブ対応
    const widthForProfileBackImage = window.parent.screen.width.toString();
    const heightForProfileBackImage = new BigNumber(widthForProfileBackImage)
        .dividedBy(profileBackImageFluid.aspectRatio)
        .toString();
    const imgStyleForProfileBackImage = {
        height: heightForProfileBackImage + 'px',
        width: widthForProfileBackImage + 'px',
    };

    // Todo: レスポンシブ対応
    const diameterFroThumbnailImage = '163px';

    return (
        <div className={styles.profileTiles}>
            <Image
                fluid={profileBackImageFluid}
                alt="profile-back"
                imgStyle={imgStyleForProfileBackImage}
            />

            <ThumbnailIcon
                fluid={thumbnailImageFluid}
                diameter={diameterFroThumbnailImage}
            />
        </div>
    );
};

export default ProfileTile;
