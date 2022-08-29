export type MicrocmsBlog = {
  createdAt: string;
  id: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  content: string;
};

export type MicrocmsBlogObj = {
  contents: MicrocmsBlog[];
  limit: number;
  offset: number;
  totalCount: number;
};
