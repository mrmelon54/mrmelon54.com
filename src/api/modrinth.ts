export type ModData = {
  id: string;
  slug: string;
  project_type: string;
  team: string;
  title: string;
  description: string;
  body: string;
  published: Date;
  updated: Date;
  approved: Date;
  status: string;
  client_side: "required" | "optional" | "unsupported";
  server_side: "required" | "optional" | "unsupported";
  downloads: number;
  followers: number;
  categories: Array<string>;
  additional_categories: Array<string>;
  versions: Array<string>;
  icon_url: string;
  issues_url: string;
  source_url: string;
  wiki_url: string;
  discord_url: string;
  donation_urls: Array<DonationItem>;
  gallery: Array<GalleryItem>;
  game_versions: Array<string>;
};

export type DonationItem = {
  id: string;
  platform: string;
  url: string;
};

export type GalleryItem = {
  url: string;
  featured: boolean;
  title: string;
  description: string;
  created: Date;
};
