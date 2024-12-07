import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  const accessToken = process.env.GOOGLE_ACCESS_TOKEN_URL;
  const data = await fetch("https://photoslibrary.googleapis.com/v1/mediaItems", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  const json = await data.json();
  return NextResponse.json({ accessToken, data: json });
}
