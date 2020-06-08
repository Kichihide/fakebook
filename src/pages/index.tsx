import * as React from "react";
import { graphql } from "gatsby";
import { PostPreviewListQuery } from "../../types/graphql-types";
import Layouts from "../layouts/index";
import PostPreview from "../components/postPreview";
import ProfileTiles from "../components/profileTiles";

// const styles = require("./index.module.scss");

type Props = {
  data: PostPreviewListQuery
}


const Component: React.FC<Props> = ({ data }) => (
  <Layouts>
    <ProfileTiles/>
    <section>
      {data.allMarkdownRemark.edges.map((fields: any) => (
        <PostPreview key={fields.node.id}
                     userName={data.allJsonJson.edges[0].node.userName ? data.allJsonJson.edges[0].node.userName : "test"}
                     fields={fields}/>
      ))}
    </section>
  </Layouts>
);


export const pageQuery = graphql`
  query PostPreviewList {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark {
      edges {
        node {
          id
          fields {
            slug
          }
          html
          frontmatter {
            tags
            title
            description
            date
          }
        }
      }
      totalCount
    }
    allJsonJson {
      edges {
        node {
          userName
        }
      }
    }
  }
`;


export default Component;