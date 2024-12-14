'use client'

import { DownloadIcon } from "@/components/common/icon/DownloadIcon";
import { HeartIcon } from "@/components/common/icon/HeartIcon";
import { SharedIcon } from "@/components/common/icon/SharedIcon";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

// Array of objects containing image data
const images = [
  {
    src: "/cover_photo.JPG",
    location: "Brisbane",
    description: "1st picture. Everyone wants more.",
  },
  {
    src: "/cover_photo-1.JPG",
    location: "Brisbane",
    description: "100th picture. Loc wants more",
  },
  {
    src: "/cover_photo-2.JPG",
    location: "Gold Coast (Real bo bien vang)",
    description: "Airplane and suitcases are waiting",
  },
  {
    src: "/cover_photo-3.JPG",
    location: "Wet and wild",
    description: "This gang is created 1 hour ago",
  },
];

export default function ImageCarouselHolder() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHeartClicked, setIsHeartClicked] = useState(false); // State for heart icon

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const toggleHeart = () => {
    setIsHeartClicked((prev) => !prev); // Toggle heart state
  };

  return (
    <div>
      <div className="relative h-[700px]">
        <Image
          src={images[currentIndex].src}
          alt="Cover Photo"
          width={1200}
          height={800}
          className="w-full h-full object-cover"
        />
        <button
          onClick={nextImage}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-200"
        >
          <ArrowRightIcon />
        </button>
      </div>

      <div className="bg-transparent text-black pt-5 px-3">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-xl font-semibold mb-2">{images[currentIndex].location}</h3>
            <p>
              {images[currentIndex].description}
            </p>
          </div>

          <div className="flex gap-4">
            <button
              onClick={toggleHeart}
              className={`p-2 rounded-full ${isHeartClicked ? 'bg-red-500' : 'hover:bg-black/10'}`} // Change color based on state
            >
              <HeartIcon />
            </button>
            <button className="p-2 hover:bg-black/10 rounded-full">
              <DownloadIcon />
            </button>
            <button className="p-2 hover:bg-black/10 rounded-full">
              <SharedIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
