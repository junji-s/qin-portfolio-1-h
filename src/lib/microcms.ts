import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "qin-junji",
  apiKey: process.env.MICROCMS_API_KEY,
});
