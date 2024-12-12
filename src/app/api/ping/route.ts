import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const encodedAuthCode = '4%2F0AeanS0ZNYcMUPk1XX2jzLhgdtZH-WPytoFc1Ck0a_DlWlJw2ICxTf1-Ft8Kyh7LRVIyMog';
  const decodedAuthCode = decodeURIComponent(encodedAuthCode);
  
  console.log(decodedAuthCode);
  return NextResponse.json({ message: decodedAuthCode });
}