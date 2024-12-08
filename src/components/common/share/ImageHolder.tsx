import Image from "next/image";

interface ImageHolderProps {
  src: string;
  alt: string;
}

export const ImageHolder = ({ src, alt }: ImageHolderProps) => {
  return (
    <div className="relative aspect-[4/3]">
      <Image src={src} alt={alt} className="object-cover rounded-lg" />
    </div>
  );
}
