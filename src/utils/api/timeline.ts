export type Project = {
  id: number;
  key: string;
  title: string;
  description: string;
  url: string;
  group_id: number;
  activity: Activity;
};

export type Activity = {
  id: number;
  key: string;
  title: string;
  description: string;
  value: number;
  project_id: number;
  status: string;
};
