import * as React from "react";
import { graphql } from "gatsby";
import { GatsbyImageSharpFluidFragment, TimelinePageQuery } from "../../types/graphql-types";
import Layouts from "../layouts/index";
import PostPreview from "../components/postPreview";
import ProfileTiles from "../components/profileTile";


// const styles = require("./index.module.scss");

type Props = {
  data: TimelinePageQuery
}

const Component: React.FC<Props> = ({ data }) => {
  const { fLogoImage, profileBackImage, siteMetadataJson, thumbnailImage, timelineData } = data;

  return (
    <Layouts
      title={siteMetadataJson?.siteMetadata?.title}
      fLogoImageFluid={getImageFluid(fLogoImage)}
    >
      <ProfileTiles
        thumbnailImageFluid={getImageFluid(thumbnailImage)}
        profileBackImageFluid={getImageFluid(profileBackImage)}
      />
      <section>
        {(() => {
          return timelineData.edges.map((edge: any) => {
            const { id, fields } = edge.node;
            return (
              <PostPreview
                key={id}
                userName={"佐々木 小次郎"}
                fields={fields}
              />
            );
          });
        })()}
      </section>
    </Layouts>
  );
};

function getImageFluid(imageData: any): GatsbyImageSharpFluidFragment {
  return imageData?.childImageSharp?.fluid;
}


export const pageQuery = graphql`
query timelinePage {
  siteMetadataJson: jsonJson {
    siteMetadata {
      title
    }
  }
  thumbnailImage: file(relativePath: {eq: "images/thumbnail.jpg"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
  profileBackImage: file(relativePath: {eq: "images/profile_back.jpg"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
  fLogoImage: file(relativePath: {eq: "images/f_logo.png"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
  timelineData: allMarkdownRemark {
    edges {
      node {
        id
        html
        fields {
          slug
        }
        frontmatter {
          tags
          title
          description
          date
        }
      }
    }
  }
}
`;


export default Component;