import { NextRequest } from "next/server";

import { CloudinaryResource } from '@/constants/interface';
import { v2 as cloudinary } from 'cloudinary';

export async function GET(req: NextRequest) {
  cloudinary.config({
    cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });

  const searchParams = req.nextUrl.searchParams;
  const nextCursor = searchParams.get('next_cursor');

  const result = await cloudinary.api.resources({
    resource_type: 'image',
    type: 'upload',
    prefix: 'gold-coast',
    max_results: 100,
    next_cursor: nextCursor ?? undefined
  });

  return Response.json(result);
}