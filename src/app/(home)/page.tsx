"use client";

import { DownloadIcon } from "@/components/common/icon/DownloadIcon";
import { HeartIcon } from "@/components/common/icon/HeartIcon";
import { SharedIcon } from "@/components/common/icon/SharedIcon";
import { NavBar } from "@/components/common/share/NavBar";
import { supabase } from "../utils/supabase";
import { GooglePhotosService } from "@/service/service";
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
      const items = await supabase.from("image_links").select("*");
      setMediaItems(items.data || []);
      // const items = await fetch("/api/pong").then(res => res.json());
      // setMediaItems(items.data.mediaItems);
    };
    
    fetchMediaItems();
  }, []);

  if (!mediaItems || mediaItems.length === 0) return;

  return (
    <>
      <div className="flex flex-col mx-auto p-4">
        <div className="fixed top-0 w-full mx-10">
          {/* <NavBar /> */}
        </div>

        <h1 className="text-center text-4xl font-bold">{"Gold Coast"}</h1>
        <h2 className="text-center text-lg mb-8">{"Summer 2024"}</h2>

        {/* Cover Photo */}
        <div className="rounded-2xl mx-10 overflow-hidden bg-white shadow-lg">
          <div className="relative">
            <Image
              src="/cover_photo.JPG"
              alt="Cover Photo"
              width={1200}
              height={800}
              className="w-full h-auto"
            />
          </div>

          <div className="bg-transparent text-black p-6">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-xl font-semibold mb-2">Location</h3>
                <p
                  contentEditable="true"
                  suppressContentEditableWarning
                  className="outline-none focus:bg-white/10 rounded px-1 transition-colors"
                  onBlur={(e) => {
                    console.log("New text:", e.currentTarget.textContent);
                  }}
                >
                  Something cool about this picture
                </p>
              </div>

              <div className="flex gap-4">
                <button className="p-2 hover:bg-black/10 rounded-full">
                  <HeartIcon />
                </button>
                <button className="p-2 hover:bg-black/10 rounded-full">
                  <DownloadIcon />
                </button>
                <button className="p-2 hover:bg-black/10 rounded-full">
                  <SharedIcon />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-2xl mx-10 overflow-hidden bg-white shadow-lg mt-20 px-5 py-20">
          {/* Title Section */}
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
