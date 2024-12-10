import { GooglePhotosService } from '@/service/service';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const imageUrl = searchParams.get('url');

  if (!imageUrl) {
    return new Response('Missing URL parameter', { status: 400 });
  }

  try {
    // Initialize the Google Photos service with your auth credentials
    const photosService = new GooglePhotosService();
    // Get an authenticated URL or the actual image data
    const response = await photosService.getPhoto(imageUrl);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch image: ${response.statusText}`);
    }

    const blob = await response.blob();
    return new Response(blob, {
      headers: {
        'Content-Type': response.headers.get('Content-Type') || 'image/jpeg',
        'Cache-Control': 'public, max-age=31536000',
      },
    });
  } catch (error) {
    console.error('Error fetching image:', error);
    return new Response('Failed to fetch image', { status: 500 });
  }
}