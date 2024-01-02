export interface McUploadItem {
  name: string;
  modrinth: McUploadItemPlatform;
  curseforge: McUploadItemPlatform;
  github: string;
}

export interface McUploadItemPlatform {
  url: string;
  id: string;
}

export interface McUploadVersion {
  meta: {
    version: string;
    channel: string;
    game_versions: string[];
    loaders: string[];
    environment: string;
  };
  filename: string;
  sha512: string;
  modrinth_id: string;
  curseforge_id: string;
}
