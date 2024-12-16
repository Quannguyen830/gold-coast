"use client"

import { CloudinaryAPIResponse, CloudinaryResource } from "@/constants/interface";
import next from "next";
import { useCallback, useEffect, useState } from "react";



export default function ImageGrid2() {  
  const [sublist1, setSublist1] = useState<CloudinaryResource[]>([]);
  const [sublist2, setSublist2] = useState<CloudinaryResource[]>([]);
  const [sublist3, setSublist3] = useState<CloudinaryResource[]>([]);


  const getImages = useCallback((nextCursor?: string) => {
    let url = '/api/cloudinary';
    
    if (nextCursor) {
      url = `api/cloudinary?next_cursor=${nextCursor}`;
    }
    
    return fetch(url)
      .then((response) => response.json())
      .then((result: CloudinaryAPIResponse) => {
        const sublistLength = Math.floor(result.resources.length / 3);
      
        const sublist1 = result.resources.slice(0, sublistLength);
        const sublist2 = result.resources.slice(sublistLength, 2 * sublistLength);
        const sublist3 = result.resources.slice(2 * sublistLength);
  
        return {
          sublist1,
          sublist2,
          sublist3,
          nextCursor: result.nextCursor
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
    getImages().then(({ sublist1, sublist2, sublist3 }) => {
      setSublist1(sublist1);
      setSublist2(sublist2);
      setSublist3(sublist3);
    });
  }, [getImages]);
  
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className={`col-start-1`}>
          {sublist1.map((image: CloudinaryResource, index: number) => (              
            <img
              key={index}
              src={image.secure_url}
              alt={index.toString()}
              className={`rounded-lg w-full mb-4`}
            />
          ))}
        </div>

        <div className={`col-start-2`}>
          {sublist2.map((image: CloudinaryResource, index: number) => (              
            <img
              key={index}
              src={image.secure_url}
              alt={index.toString()}
              className={`rounded-lg w-full mb-4`}
            />
          ))}
        </div>

        <div className={`col-start-3`}>
          {sublist3.map((image: CloudinaryResource, index: number) => (              
            <img
              key={index}
              src={image.secure_url}
              alt={index.toString()}
              className={`rounded-lg w-full mb-4`}
            />
          ))}
        </div>
      </div>
    </div>
  );

}
