import axios from "axios";

export const twFetcher = (url: string) => {
  return axios.get(url).then((res) => res.data);
};
