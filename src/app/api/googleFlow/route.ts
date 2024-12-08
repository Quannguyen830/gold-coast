import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const clientId = process.env.GOOGLE_CLIENT_ID;
  const redirectUri = `${process.env.GOOGLE_REDIRECT_URI}`;
  const scope = encodeURIComponent('https://www.googleapis.com/auth/photoslibrary.readonly');
  
  const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?` + 
    `client_id=${clientId}&` +
    `scope=${scope}&` +
    `redirect_uri=${redirectUri}&` +
    `response_type=code&` +
    `access_type=offline`;

  // Get the code from the root path query parameters
  const code = req.nextUrl.searchParams.get('code');
  
  console.log('Redirect URI:', redirectUri);
  console.log('Received code:', code);

  if (!code) {
    return NextResponse.json({
      success: false,
      error: 'No authorization code provided',
      authUrl: authUrl
    });
  }

  try {
    console.log('Exchanging code for token...');
    const tokenResponse = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        code,
        client_id: process.env.GOOGLE_CLIENT_ID!,
        client_secret: process.env.GOOGLE_CLIENT_SECRET!,
        redirect_uri: redirectUri,
        grant_type: 'authorization_code',
      }),
    });

    const tokenData = await tokenResponse.json();
    console.log('Token response:', tokenData);

    if (!tokenResponse.ok) {
      return NextResponse.json({
        success: false,
        error: 'Failed to get access token',
        details: tokenData
      }, { status: 401 });
    }

    // Fetch photos
    const photosResponse = await fetch('https://photoslibrary.googleapis.com/v1/mediaItems', {
      headers: {
        Authorization: `Bearer ${tokenData.access_token}`,
      },
    });

    const photosData = await photosResponse.json();

    if (!photosResponse.ok) {
      return NextResponse.json({
        success: false,
        error: 'Failed to fetch photos',
        details: photosData
      }, { status: photosResponse.status });
    }

    // Success response
    return NextResponse.json({
      success: true,
      data: {
        mediaItems: photosData.mediaItems || [],
        nextPageToken: photosData.nextPageToken,
        totalItems: photosData.mediaItems?.length || 0
      }
    });

  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({
      success: false,
      error: 'Internal server error',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}
