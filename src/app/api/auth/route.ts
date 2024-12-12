import { NextRequest, NextResponse } from 'next/server';

// Constants for OAuth configuration
const GOOGLE_AUTH_URL = 'https://accounts.google.com/o/oauth2/v2/auth';
const GOOGLE_TOKEN_URL = 'https://oauth2.googleapis.com/token';
const CLIENT_ID = '1015137600762-411paej3c3d83dtte6n41ruoubvl34hh.apps.googleusercontent.com';
const CLIENT_SECRET = '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vOCCgZKfedjjpmBEpCgbLMyvNSec9tzb2oGa0ER7YPt1huvD3gXbo_uxRmXSG5qJrHy3jhWCdLqI4SKuoqjfxTIROE96Ua7fBeZJx5Ueeq4trG1G4SS7UVwepEqhij0n5LVzZGXf8aCgYKAd8SARMSFQHGX2MiFzAoM_Qbj3g8PYa4ncXcPg0170';
const REDIRECT_URI = 'http://localhost:3000';

export async function GET(request: NextRequest) {
  const primaryUrl = new URL("https://accounts.google.com/o/oauth2/v2/auth?client_id=1015137600762-411paej3c3d83dtte6n41ruoubvl34hh.apps.googleusercontent.com&redirect_uri=http://localhost:3000&response_type=code&scope=https://www.googleapis.com/auth/photoslibrary.readonly") 
  const data = await fetch(primaryUrl.toString());
  const newUrl = new URL(data.url);

  // // If code is present, exchange it for an access token
  // try {
  //   const response = await fetch(GOOGLE_TOKEN_URL, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/x-www-form-urlencoded",
  //     },
  //     body: new URLSearchParams({
  //       code: code,
  //       client_id: CLIENT_ID,
  //       client_secret: CLIENT_SECRET,
  //       redirect_uri: REDIRECT_URI,
  //       grant_type: 'authorization_code',
  //     }).toString(),
  //   });
    
    // const data = await response.json();
  return NextResponse.json(newUrl);
  // } catch (error) {
  //   return NextResponse.json({ error: 'Failed to get access token' }, { status: 500 });
  // }
} 