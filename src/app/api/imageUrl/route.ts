import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { GooglePhotosService } from "@/service/service";

export async function GET(req: NextRequest) {
  const googlePhotosService = new GooglePhotosService();
  await googlePhotosService.initializeStorage();
  const baseUrls = googlePhotosService.getBaseUrl();

  return NextResponse.json({ baseUrls });
}
