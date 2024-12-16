"use client"

import { CloudinaryAPIResponse, CloudinaryResource } from "@/constants/interface";
import next from "next";
import { useCallback, useEffect, useRef, useState } from "react";
import { CldImage } from "next-cloudinary";



export default function ImageGrid2() {
  const [sublist1, setSublist1] = useState<CloudinaryResource[]>([]);
  const [sublist2, setSublist2] = useState<CloudinaryResource[]>([]);
  const [sublist3, setSublist3] = useState<CloudinaryResource[]>([]);

  const [nextCursor, setNextCursor] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const endOfListRef = useRef<HTMLDivElement>(null);

  const getImages = useCallback((nextCursor?: string) => {
    let url = '/api/cloudinary';

    if (nextCursor) {
      url = `/api/cloudinary?next_cursor=${nextCursor}`;
    }

    return fetch(url)
      .then((response) => response.json())
      .then((result: CloudinaryAPIResponse) => {
        const sublistLength = Math.floor(result.resources.length / 3);

        const sublist1 = result.resources.slice(0, sublistLength);
        const sublist2 = result.resources.slice(sublistLength, 2 * sublistLength);
        const sublist3 = result.resources.slice(2 * sublistLength);

        console.log(result.next_cursor)

        return {
          sublist1,
          sublist2,
          sublist3,
          nextCursor: result.next_cursor
        };
      })
      .catch((error) => {
        console.error('Error fetching images:', error);
        return {
          sublist1: [],
          sublist2: [],
          sublist3: [],
          nextCursor: null
        };
      });
  }, []);

  useEffect(() => {
    getImages().then(({ sublist1, sublist2, sublist3, nextCursor }) => {
      setSublist1(sublist1);
      setSublist2(sublist2);
      setSublist3(sublist3);
      setNextCursor(nextCursor)
    });

    console.log(getImages)
  }, [getImages]);

  useEffect(() => {
    const handleScroll = () => {
      if (!endOfListRef.current || isLoading) return;

      const { bottom } = endOfListRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Check if we're within 500px of the bottom
      if (
        windowHeight - bottom < 500 &&
        nextCursor
      ) {
        setIsLoading(true);
        getImages(nextCursor).then(({ sublist1, sublist2, sublist3, nextCursor }) => {
          setSublist1(prev => [...prev, ...sublist1]);
          setSublist2(prev => [...prev, ...sublist2]);
          setSublist3(prev => [...prev, ...sublist3]);
          setNextCursor(nextCursor);
          setIsLoading(false);
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [getImages, nextCursor, isLoading]);

  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className={`col-start-1`}>
          {sublist1.map((image: CloudinaryResource, index: number) => (
            <CldImage
              key={image.public_id + `/${index}`}
              src={image.secure_url}
              alt={image.public_id}
              width={800}
              height={600}
              className="rounded-lg w-full mb-4"
            />
          ))}
        </div>

        <div className={`col-start-2`}>
          {sublist2.map((image: CloudinaryResource, index: number) => (
            <CldImage
              key={image.public_id + `/${index}`}
              src={image.secure_url}
              alt={image.public_id}
              width={800}
              height={600}
              className="rounded-lg w-full mb-4"
            />
          ))}
        </div>

        <div className={`col-start-3`}>
          {sublist3.map((image: CloudinaryResource, index: number) => (
            <CldImage
              key={image.public_id + `/${index}`}
              src={image.secure_url}
              alt={image.public_id}
              width={800}
              height={600}
              className="rounded-lg w-full mb-4"
            />
          ))}
        </div>
      </div>

      {isLoading && (
        <div className="text-center py-4">Loading more images...</div>
      )}
      <div ref={endOfListRef} />
    </div>
  );

}
