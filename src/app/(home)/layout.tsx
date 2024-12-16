import type { Metadata } from "next";
import '..//globals.css';
import { dancingScript, dmSans, inter, poppins } from "@/components/common/font/fonts";

export const metadata: Metadata = {
  title: "Gold Coast",
  description: "Nho mai chuyen di nay",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dancingScript.className} bg-red-50`}
      >
        <main className="">
          {children}
        </main>
      </body>
    </html>
  );
}
