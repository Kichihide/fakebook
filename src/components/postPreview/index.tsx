import * as React from "react";
import { MarkdownRemarkFields } from "../../../types/graphql-types";

const styles = require("./index.module.scss");


type Props = {
  userName?: String,
  fields?: {
    node: {
      fields: MarkdownRemarkFields
    };
  }
}


const Component: React.FC<Props> = ({ userName, fields }) => (
  <article className={styles.postPreview}>
    {userName}
    {fields ? fields.node.fields.slug : null}
  </article>
);


export default Component;
