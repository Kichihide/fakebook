import * as React from "react";
import { Helmet } from "react-helmet";
import Header from "../components/header/index";

const styles = require("./index.module.scss");


const Component: React.FC = props => (
  <div id="page" className={styles.layouts}>
    <Helmet title="Gatsby Default Starter"/>
    <Header/>
    <div>
      {props.children}
    </div>
  </div>
);


export default Component;
