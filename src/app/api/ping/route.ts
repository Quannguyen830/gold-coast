import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const encodedAuthCode = '4%2F0AeanS0Yiik0CBkTWyvRf-iHztvTNNsjkcH9Wy_4Wd14sh-GXD_hxCLOrTxn8zlzwxS1bqg';
  const decodedAuthCode = decodeURIComponent(encodedAuthCode);
  
  console.log(decodedAuthCode);
  return NextResponse.json({ message: decodedAuthCode });
}