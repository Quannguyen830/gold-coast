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
    const result = await cloudinary.api.resources({
      resource_type: 'image',
      type: 'upload',
      prefix: 'gold-coast',
      max_results: 50
    });
    
    return (
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center my-8">Burleigh Beach</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {result.resources.map((resource: CloudinaryResource) => (
            <ImageHolder 
              key={resource.public_id}
              src={resource.secure_url} 
              alt={resource.public_id} 
              width={resource.width/10}
              height={resource.height/10}
              className="rounded-lg"
            />
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

