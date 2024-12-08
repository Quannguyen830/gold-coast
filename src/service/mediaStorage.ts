interface MediaItem {
  id: string;
  productUrl: string;
  baseUrl: string;
  mimeType: string;
  mediaMetadata: {
    creationTime: string;
    width: string;
    height: string;
    photo: Record<string, unknown>;
  };
  filename: string;
}

export class MediaStorage {
  private static instance: MediaStorage;
  private mediaItems: MediaItem[] = [];
  private isDataFetched: boolean = false;

  private constructor() {}

  static getInstance(): MediaStorage {
    if (!MediaStorage.instance) {
      MediaStorage.instance = new MediaStorage();
    }
    return MediaStorage.instance;
  }

  addMediaItems(items: MediaItem[]) {
    this.mediaItems.push(...items);
    this.isDataFetched = true;
  }

  getMediaItems(): MediaItem[] {
    return this.mediaItems;
  }

  isInitialized(): boolean {
    return this.isDataFetched;
  }

  clear() {
    this.mediaItems = [];
    this.isDataFetched = false;
  }
} 