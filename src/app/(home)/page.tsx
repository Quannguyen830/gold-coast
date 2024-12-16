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
            <h1 className="text-center text-[80px] font-bold">{"Gold Coast"}</h1>
            <h2 className="text-center text-2xl">{"Summer 2024"}</h2>
          </div>

          <div className="absolute inset-0 bg-black/30 "></div>
          <img
            src="https://res.cloudinary.com/dbduswxqe/image/upload/v1733991944/gold-coast/l%E1%BB%99c/nmnlen3bhd1zhuvf8ivc.jpg"
            alt="Cover Photo"
            className="w-full h-full object-cover"
          />
        </div>

        <div>
          <h1 className="text-[50px] font-bold text-center my-8">Gold Coast Pinterest</h1>
          <ImageGrid2 />
        </div>
      </div>
    </>
  );
}
