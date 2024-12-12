import React from 'react';
import {v2 as cloudinary} from 'cloudinary';
import { CldImage } from 'next-cloudinary';
import Image from 'next/image';
import { ImageHolder } from '@/components/common/share/ImageHolder';

// Configure cloudinary with proper typing
cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

interface CloudinaryResource {
  public_id: string;
  secure_url: string;
  width: number;
  height: number;
}

export default async function Page() {
  try {
    // Specify resource_type as 'image' and add type parameter
    const result = await cloudinary.api.resources({
      resource_type: 'image',
      type: 'upload',
      prefix: 'gold-coast',
      max_results: 50
    });
    
    console.log("Result", result.resources);
    return (
      <div>
        <h1>Cloudinary Test</h1>
        <div className="grid grid-cols-2 gap-4">
          {result.resources.map((resource: CloudinaryResource) => (
            <div key={resource.public_id} className="relative w-full h-[300px]">
              <ImageHolder src={resource.secure_url} alt={resource.public_id} width={resource.width/5} height={resource.height/5} />
            </div>
          ))}
        </div>
      </div>
    );
  } catch (error) {
    console.error('Cloudinary Error:', error);
    return (
      <div>
        <h1>Error fetching resources</h1>
        <pre>{JSON.stringify(error, null, 2)}</pre>
      </div>
    );
  }
}

