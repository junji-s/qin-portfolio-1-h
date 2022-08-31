import type { NextApiRequest, NextApiResponse } from "next";
import { client } from "src/lib/microcms";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const data = await client.getList({
    endpoint: "blogs",
    queries: {
      limit: req.body.limit,
      offset: req.body.offset,
    },
  });
  res.status(200).json(data.contents);
};

export default handler;
