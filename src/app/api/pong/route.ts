import { supabase } from "@/app/utils/supabase";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const accessToken = process.env.GOOGLE_ACCESS_TOKEN_URL;

  const data = await fetch(
    "https://photoslibrary.googleapis.com/v1/mediaItems?pageSize=100",
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
  const json = await data.json();

  try {
    for (const item of json.mediaItems) {
      console.log("INSERTING ITEM", item.id);
      const result = await supabase.from("image_links").insert({
        baseUrl: item.baseUrl,
        productUrl: item.productUrl,
        mimeType: item.mimeType,
        filename: item.filename,
        mediaMetadata: item.mediaMetadata,
      });
      console.log("INSERT RESULT", result);
    }
  } catch (error) {
    console.error("Error inserting media items", error);
  }

  return NextResponse.json({ accessToken, data: json });
}
