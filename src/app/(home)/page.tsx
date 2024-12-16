import ImageGrid2 from "@/components/common/share/ImageGrid2";
import { DownloadIcon } from "@/components/common/icon/DownloadIcon";
import { SharedIcon } from "@/components/common/icon/SharedIcon";
import { HeartIcon } from "@/components/common/icon/HeartIcon";


export default function Home() {
  return (
    <>
      <div className="flex flex-col overflow-hidden mx-auto">
        {/* Cover Photo */}
        <div className="relative overflow-hidden h-screen bg-white">
          <div className="absolute flex-col z-20 text-white mt-16 w-full flex justify-center">
            <h1 className="text-center text-5xl font-bold">{"Gold Coast"}</h1>
            <h2 className="text-center text-lg">{"Summer 2024"}</h2>
          </div>

          <div className="absolute inset-0 bg-black/30 "></div>
          <img
            src="https://res.cloudinary.com/dbduswxqe/image/upload/v1733991944/gold-coast/l%E1%BB%99c/nmnlen3bhd1zhuvf8ivc.jpg"
            alt="Cover Photo"
            className="w-full h-full object-cover"
          />

          {/* <div className="bg-transparent text-black p-6">
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
          </div> */}
        </div>

        {/* <div className="rounded-2xl mx-10 overflow-hidden bg-white shadow-lg mt-20 px-5 py-20"> */}
        <div>
          <h1 className="text-3xl font-bold text-center my-8">Burleigh Beach</h1>
          <ImageGrid2 />
        </div>

        {/* <div className="rounded-xl mx-10 overflow-hidden bg-white shadow-lg px-3 py-5">
          <ImageCarousel />
        </div> */}
      </div>
    </>
  );
}
