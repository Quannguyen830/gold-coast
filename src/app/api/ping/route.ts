import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const encodedAuthCode = '4%2F0AeanS0YKY6l-6jnqXgbAcTflaM0mgaRvUNGPPnJhMrzVJ0lohGpZ2j8XF13dv8h2eJSvpA';
  const decodedAuthCode = decodeURIComponent(encodedAuthCode);
  
  console.log(decodedAuthCode);
  return NextResponse.json({ message: 'pong' });
}