import type { NextApiRequest, NextApiResponse } from "next";

import axios from "axios";

const userId = "1401400230";
const endpoint = `https://api.twitter.com/2/users/${userId}/tweets?max_results=5&tweet.fields=created_at%2Cattachments&user.fields=profile_image_url&place.fields=&expansions=author_id%2Cattachments.media_keys&exclude=replies&media.fields=preview_image_url%2Cmedia_key%2Cheight%2Cwidth`;
const bearerToken = process.env.TW_BEARER_TOKEN;

const twHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const data = await axios.get(endpoint, {
    headers: { Authorization: `Bearer ${bearerToken}` },
  });

  return res.status(200).json(data.data);
};

export default twHandler;
