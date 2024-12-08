import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const accessToken = process.env.GOOGLE_ACCESS_TOKEN_URL;
  const data = await fetch("https://photoslibrary.googleapis.com/v1/mediaItems?pageSize=100", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  const json = await data.json();
  console.log(json?.mediaItems?.length);
  return NextResponse.json({ accessToken, data: json });
}
