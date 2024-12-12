'use client'

import { CldImage } from "next-cloudinary";
import Image from "next/image";

interface ImageHolderProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

export const ImageHolder = ({ src, alt, width, height, className }: ImageHolderProps) => {
  return <CldImage src={src} alt={alt} width={width} height={height} className={className} />;
};
