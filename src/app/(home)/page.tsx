"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

interface MediaItem {
  id: string;
  baseUrl: string;
  filename: string;
  mimeType: string;
}

export default function Home() {
  const [mediaItems, setMediaItems] = useState<MediaItem[]>([]);

  useEffect(() => {
    const fetchMediaItems = async () => {
      const items = await fetch("/api/pong").then(res => res.json());
      setMediaItems(items.data.mediaItems);
    };
    
    fetchMediaItems();
  }, []);

  if (mediaItems.length === 0) return;

  return (
    <>
      <div className="flex flex-col mx-auto p-4">
        <h4 className="ml-6 my-10 font-bold">{"Khu Pho Glenferrie"}</h4>
        <h1 className="text-center text-[100px] font-bold">{"Gold Coast"}</h1>
        <h2 className="text-center text-3xl mb-8">{"Summer 2024"}</h2>

        {/* Cover Photo */}
        <div className="rounded-2xl ml-6 overflow-hidden bg-white shadow-lg">
          <div className="relative">
            <Image
              src="/cover_photo.JPG"
              alt="Cover Photo"
              width={1200}
              height={800}
              className="w-full h-auto"
            />
          </div>

          <div className="bg-black text-white p-6">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-xl font-semibold mb-2">Location</h3>
                <p
                  contentEditable="true"
                  suppressContentEditableWarning
                  className="text-white/80 outline-none focus:bg-white/10 rounded px-1 transition-colors"
                  onBlur={(e) => {
                    // Here you can add logic to save the edited text
                    console.log("New text:", e.currentTarget.textContent);
                  }}
                >
                  Something cool about this picture
                </p>
              </div>

              <div className="flex gap-4">
                <button className="p-2 hover:bg-white/10 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </button>
                <button className="p-2 hover:bg-white/10 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                </button>
                <button className="p-2 hover:bg-white/10 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col mt-20">
          <h1 className="text-4xl font-bold text-center mb-8">
            Burleigh Beach
          </h1>

          {/* Photo Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-6">
            {mediaItems.map((item, index) => (
              <div key={index} className="relative aspect-[4/3]">
                {item.mimeType.startsWith('image/') && (
                  <img
                    src={item.baseUrl}
                    alt={item.filename || `Photo ${index + 1}`}
                    className="object-cover rounded-lg"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
