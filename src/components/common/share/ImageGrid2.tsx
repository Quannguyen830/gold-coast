import { CloudinaryResource } from '@/constants/interface';
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default async function ImageGrid2() {
  const result = await cloudinary.api.resources({
    resource_type: 'image',
    type: 'upload',
    prefix: 'gold-coast',
    max_results: 100
  });

  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className={`col-start-1`}>
          {result.resources.slice(0, 20).map((image: CloudinaryResource, index: number) => (
            <img
              key={index}
              src={image.secure_url}
              alt={index.toString()}
              className={`rounded-lg w-full mb-4`}
            />
          ))}
        </div>

        <div className={`col-start-2`}>
          {result.resources.slice(21, 40).map((image: CloudinaryResource, index: number) => (
            <img
              key={index}
              src={image.secure_url}
              alt={index.toString()}
              className={`rounded-lg w-full mb-4`}
            />
          ))}
        </div>

        <div className={`col-start-3`}>
          {result.resources.slice(41, 60).map((image: CloudinaryResource, index: number) => (
            <img
              key={index}
              src={image.secure_url}
              alt={index.toString()}
              className={`rounded-lg w-full mb-4`}
            />
          ))}
        </div>
      </div>
    </div>
  );

}
