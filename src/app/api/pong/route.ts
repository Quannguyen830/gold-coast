import { supabase } from "@/app/utils/supabase";
import { GooglePhotosService } from "@/service/service";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const cloudinary = await fetch(`https://${process.env.CLOUDINARY_API_KEY}:${process.env.CLOUDINARY_API_SECRET}@api.cloudinary.com/v1_1/${process.env.CLOUD_NAME}/resources/image`);
  const json = await cloudinary.json();
  return NextResponse.json(json);
}
