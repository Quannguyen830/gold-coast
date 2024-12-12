'use client'

import { CldImage } from "next-cloudinary";
import Image from "next/image";

interface ImageHolderProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  sizes?: string;
}

export const ImageHolder = ({ src, alt, width, height, className, sizes }: ImageHolderProps) => {
  return <CldImage src={src} alt={alt} width={width} height={height} className={className} sizes={sizes} />;
};