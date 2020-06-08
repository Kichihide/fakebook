import * as React from "react";
import { graphql } from "gatsby";
import Layouts from "../layouts/index";
import { IndexHogeQuery } from "../../types/graphql-types";

// const styles = require("./index.module.scss");

type Props = {
  data: IndexHogeQuery
}


const Component: React.FC<Props> = ({ data }) => (
  <Layouts>
    <h1>Hi peoples</h1>
    <p>
      Welcome to your new{" "}
      <strong>{data.site?.siteMetadata?.title}</strong> site.
    </p>
    <p>Now go build something great.</p>
  </Layouts>
);


export const pageQuery = graphql`
  query IndexHoge {
    site {
      siteMetadata {
        title
      }
    }
  }
`;


export default Component;