export interface CloudinaryResource {
  public_id: string;
  secure_url: string;
  width: number;
  height: number;
}

export interface Person {
  name: string;
  secret_santa: string,
  base_url: string,
}

export interface CloudinaryAPIResponse {
  nextCursor: string;
  resources: CloudinaryResource[];
}