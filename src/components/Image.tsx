import type React from "react";

interface IImage extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
}

const Image: React.FC<IImage> = (props, ...rest) => {
  const { src, alt } = props;

  return <img src={src} alt={alt} {...rest}></img>;
};

export default Image;
