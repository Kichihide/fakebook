import * as React from "react";
import Img, { FluidObject } from "gatsby-image";
import { GatsbyImageSharpFluidFragment } from "../../../types/graphql-types";

// const styles = require("./index.module.scss");

type Props = {
  fluid: GatsbyImageSharpFluidFragment,
  alt: string,
  imgStyle: {
    height: string,
    width: string
  }
}


const Image: React.FC<Props> = ({ fluid, alt, imgStyle }) => {
  const { aspectRatio, src, srcSet, sizes, base64 } = fluid;

  if (!base64) {
    return null;
  }

  const fluidObject: FluidObject = {
    aspectRatio: aspectRatio,
    src: src,
    srcSet: srcSet,
    sizes: sizes,
    base64: base64
  };

  return (
    <Img
      alt={alt}
      fluid={fluidObject}
      imgStyle={imgStyle}
    />
  );
};

export default Image;