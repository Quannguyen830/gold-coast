import { MediaStorage } from './mediaStorage';

export class GooglePhotosService {
  private accessToken: string = process.env.GOOGLE_ACCESS_TOKEN_URL!;
  private storage: MediaStorage;

  constructor() {
    this.storage = MediaStorage.getInstance();
  }

  async initializeStorage() {
    if (!this.storage.isInitialized()) {
      const response = await this.fetchPhotosFromAPI();
      if (response.mediaItems) {
        this.storage.addMediaItems(response.mediaItems);
      }
    }
  }

  private async fetchPhotosFromAPI() {
    try {
      const data = await fetch(
        "https://photoslibrary.googleapis.com/v1/mediaItems?pageSize=100",
        {
          headers: {
            Authorization: `Bearer ${this.accessToken}`,
          },
        }
      );
      return await data.json();
    } catch (error) {
      console.error('Error fetching photos:', error);
      throw error;
    }
  }

  getMediaItems() {
    return this.storage.getMediaItems();
  }

  getBaseUrl() {
    return this.storage.getMediaItems().map(item => item.baseUrl);
  }

  clearCache() {
    this.storage.clear();
  }
}
