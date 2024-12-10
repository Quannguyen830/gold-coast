import { MediaStorage } from './mediaStorage';

export class GooglePhotosService {
  private accessToken: string = "";
  private storage: MediaStorage;

  constructor() {
    this.storage = MediaStorage.getInstance();
    this.initializeAccessToken();
  }

  private async initializeAccessToken() {
    this.accessToken = await this.getAccessToken();
  }

  private async getAccessToken() {
    const responseFromAuthorize = await fetch("https://accounts.google.com/o/oauth2/v2/auth?client_id=1015137600762-411paej3c3d83dtte6n41ruoubvl34hh.apps.googleusercontent.com&redirect_uri=http://localhost:3000&response_type=code&scope=https://www.googleapis.com/auth/photoslibrary.readonly");
    const responseFromAuthorizeJson = await responseFromAuthorize.json();
    const responseFromToken = await fetch("https://oauth2.googleapis.com/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `code=${responseFromAuthorizeJson.code}&client_id=1015137600762-411paej3c3d83dtte6n41ruoubvl34hh.apps.googleusercontent.com&client_secret=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vOCCgZKfedjjpmBEpCgbLMyvNSec9tzb2oGa0ER7YPt1huvD3gXbo_uxRmXSG5qJrHy3jhWCdLqI4SKuoqjfxTIROE96Ua7fBeZJx5Ueeq4trG1G4SS7UVwepEqhij0n5LVzZGXf8aCgYKAd8SARMSFQHGX2MiFzAoM_Qbj3g8PYa4ncXcPg0170&redirect_uri=http://localhost:3000&grant_type=authorization_code`,
    });
    const responseFromTokenJson = await responseFromToken.json();
    return responseFromTokenJson.access_token;
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
      if (!this.accessToken) {
        await this.initializeAccessToken();
      }
      
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

  async getPhoto(imageUrl: string) {
    try {
      const mediaItemId = this.extractMediaItemId(imageUrl);
      
      if (!mediaItemId) {
        throw new Error('Invalid Google Photos URL');
      }

      const response = await fetch(
        `https://photoslibrary.googleapis.com/v1/mediaItems/${mediaItemId}`,
        {
          headers: {
            Authorization: `Bearer ${this.accessToken}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error(`Failed to fetch media item: ${response.statusText}`);
      }

      const mediaItem = await response.json();
      
      // Fetch the actual image using the baseUrl
      return await fetch(mediaItem.baseUrl + '=w2048-h1024');
    } catch (error) {
      console.error('Error fetching photo:', error);
      throw error;
    }
  }

  private extractMediaItemId(url: string): string | null {
    try {
      const match = url.match(/\/photo\/([^/?]+)/);
      return match ? match[1] : null;
    } catch {
      return null;
    }
  }
}
