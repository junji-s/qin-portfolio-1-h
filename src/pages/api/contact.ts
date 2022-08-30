import type { NextApiRequest, NextApiResponse } from "next";
import { client } from "src/lib/microcms";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const content = {
    email: `"${req.body.email}"`,
    name: `"${req.body.fullname}"`,
    body: `"${req.body.msg}"`,
  };

  try {
    await client.create({
      endpoint: "contact",
      content,
    });
    res.status(200).json("OK");
  } catch (err) {
    console.error(err);
    res.statusCode = 500;
  }
}
