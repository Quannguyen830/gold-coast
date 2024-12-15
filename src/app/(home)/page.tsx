import { DownloadIcon } from "@/components/common/icon/DownloadIcon";
import { HeartIcon } from "@/components/common/icon/HeartIcon";
import { SharedIcon } from "@/components/common/icon/SharedIcon";
import Image from "next/image";
import ImageGrid from "@/components/common/share/ImageGrid";
import ImageGrid2 from "@/components/common/share/ImageGrid2";
import ImageCarousel from "@/components/common/share/ImageCarousel";


export default function Home() {
  return (
    <>
      <div className="flex flex-col mx-auto p-4">
        <div className="my-4">
          <h1 className="text-center text-4xl font-bold">{"Gold Coast"}</h1>
          <h2 className="text-center text-lg">{"Summer 2024"}</h2>
        </div>

        {/* Cover Photo */}
        <div className="rounded-xl mx-auto overflow-hidden bg-white shadow-lg">
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
                <p>
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

        {/* <div className="rounded-2xl mx-10 overflow-hidden bg-white shadow-lg mt-20 px-5 py-20"> */}
        <div>
          <h1 className="text-3xl font-bold text-center my-8">Burleigh Beach</h1>
          {/* <ImageGrid /> */}
          <ImageGrid2 />
        <h1 className="text-center text-4xl font-bold">{"Gold Coast"}</h1>
        <h2 className="text-center text-lg mb-8">{"Summer 2024"}</h2>

        <div className="rounded-xl mx-10 overflow-hidden bg-white shadow-lg px-3 py-5">
          <ImageCarousel />
        </div>
      </div>
    </>
  );
}
