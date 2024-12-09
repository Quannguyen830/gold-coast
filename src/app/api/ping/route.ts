import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const encodedAuthCode = '4%2F0AeanS0YiFe6G62oUeZ78biysOoW-UWDW2HsnJRf3Pkeup9yv4v2DWCpos2bB6BqMwjF0Aw';
  const decodedAuthCode = decodeURIComponent(encodedAuthCode);
  
  console.log(decodedAuthCode);
  return NextResponse.json({ message: 'pong' });
}