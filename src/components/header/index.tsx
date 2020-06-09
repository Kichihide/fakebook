import * as React from "react";
import Image from "../image";
import { GatsbyImageSharpFluidFragment } from "../../../types/graphql-types";

const styles = require("./index.module.scss");

type Props = {
  fLogoImageFluid?: GatsbyImageSharpFluidFragment | null,
}

const Header: React.FC<Props> = ({ fLogoImageFluid }) => {
  return (
    <header className={styles.header}>
      {(() => {
        if (fLogoImageFluid) {
          // Todo: レスポンシブ対応
          const diameter = "36px";
          const imgStyle = { height: diameter, width: diameter };

          return (
            <Image
              fluid={fLogoImageFluid}
              alt="f-logo"
              imgStyle={imgStyle}
            />
          );
        }
      })()}
    </header>
  );
};


export default Header;
