export type TwitterTimeLine = {
  data: TweetType[];
  includes: {
    media: TwitterMediaType[];
    users: TwitterUserType[];
  };
  meta: {
    newest_id: string;
    next_token: string;
    oldest_id: string;
    result_count: number;
  };
};

export type TweetType = {
  text: string;
  author_id: string;
  attachments?: {
    media_keys: string[];
  };
  id: string;
  created_at: string;
};

export type TwitterMediaType = {
  media_key: string;
  preview_image_url: string;
  width: number;
  height: number;
  type: string;
};

export type TwitterUserType = {
  id: string;
  name: string;
  profile_image_url: string;
  username: string;
};
