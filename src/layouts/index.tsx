import * as React from "react";
import { Helmet } from "react-helmet";
import Header from "../components/header/index";
import { GatsbyImageSharpFluidFragment } from "../../types/graphql-types";

const styles = require("./index.module.scss");


type Props = {
  title?: string | null,
  fLogoImageFluid?: GatsbyImageSharpFluidFragment | null,
  children: any
}

const Layouts: React.FC<Props> = ({ title, fLogoImageFluid, children }) => {
  return (
    <div id="page" className={styles.layouts}>
      {(() => {
        if (title) {
          return <Helmet title={title}/>;
        }
      })()}
      <Header fLogoImageFluid={fLogoImageFluid}/>
      <div>
        {children}
      </div>
    </div>
  );
};


export default Layouts;
