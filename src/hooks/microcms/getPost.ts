import { client } from "src/lib/microcms";
import { MicrocmsBlogObj } from "src/type/microcms/blog";

export const UseGetPost = async (
  endpoint: string,
  limit: number = 5,
  offset: number = 0
) => {
  const data: MicrocmsBlogObj = await client.getList({
    endpoint,
    queries: { limit, offset },
  });
  return data;
};
