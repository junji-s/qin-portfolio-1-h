export type MicrocmsPortfolio = {
  createdAt: string;
  id: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  content: string;
  img: {
    height: number;
    url: string;
    width: number;
  };
  url: string;
};
export type MicrocmsPortfolioObj = {
  contents: MicrocmsPortfolio[];
  limit: number;
  offset: number;
  totalCount: number;
};
