'use client'

import { CldImage } from "next-cloudinary";
import Image from "next/image";

interface ImageHolderProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  sizes?: string;
  fill?: boolean;
}

export const ImageHolder = ({ src, alt, width, height, fill, className, sizes }: ImageHolderProps) => {
  return <CldImage src={src} alt={alt} width={width} height={height} fill={fill} className={className} sizes={sizes} />;
};