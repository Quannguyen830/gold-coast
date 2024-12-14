import { useState, useEffect } from "react";
import ImageGrid from "@/components/common/share/ImageGrid";
import { NavBar } from "@/components/common/share/NavBar";
import ImageCarousel from "@/components/common/share/ImageCarousel";


export default function Home() {
  return (
    <>
      <div className="flex flex-col mx-auto p-4">
        <div className="fixed py-5 top-0 w-fit mx-10">
          {/* <NavBar /> */}
        </div>

        <h1 className="text-center text-4xl font-bold">{"Gold Coast"}</h1>
        <h2 className="text-center text-lg mb-8">{"Summer 2024"}</h2>

        <div className="rounded-xl mx-10 overflow-hidden bg-white shadow-lg px-3 py-5">
          <ImageCarousel />
        </div>

        <div className="rounded-xl mx-10 overflow-hidden bg-white shadow-lg mt-20 px-5 py-20">
          <ImageGrid />
        </div>
      </div>
    </>
  );
}
