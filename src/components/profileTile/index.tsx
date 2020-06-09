import * as React from "react";
import Image from "../image";
import { GatsbyImageSharpFluidFragment } from "../../../types/graphql-types";

const styles = require("./index.module.scss");

// Todo: webpackで読み込ませる
const BigNumber = require("bignumber.js");

type Props = {
  profileBackImageFluid?: GatsbyImageSharpFluidFragment | null,
  thumbnailImageFluid?: GatsbyImageSharpFluidFragment | null,
}

const ProfileTile: React.FC<Props> = ({ profileBackImageFluid, thumbnailImageFluid }) => {
  return (
    <div className={styles.profileTiles}>
      {(() => {
        if (profileBackImageFluid) {
          // Todo: レスポンシブ対応
          const width = window.parent.screen.width.toString();
          const height = new BigNumber(width).dividedBy(profileBackImageFluid.aspectRatio).toString();
          const imgStyle = { height: height + "px", width: width + "px" };

          return (
            <Image
              fluid={profileBackImageFluid}
              alt="profile-back"
              imgStyle={imgStyle}
            />
          );
        }
      })()}
      {(() => {
        // Todo: レスポンシブ対応
        const diameter = "163px";
        const imgStyle = { height: diameter, width: diameter };

        if (thumbnailImageFluid) {
          return (
            <Image
              fluid={thumbnailImageFluid}
              alt="thumbnail"
              imgStyle={imgStyle}
            />
          );
        } else {
          // Todo: デフォルトのサムネイル画像を設定する
          return null;
        }
      })()}
      profileTiles
    </div>
  );
};


export default ProfileTile;
