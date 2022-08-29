import { UseGetPost } from "src/hooks/microcms/getPost";
import type { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const data = await UseGetPost("blogs", req.body.limit, req.body.offset);
  res.status(200).json(data.contents);
};

export default handler;
