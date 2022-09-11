import styled from "@emotion/styled";
import React, { FC } from "react";
import Image from "next/image";

import { Avatar, Box } from "@mantine/core";

import {
  TweetType,
  TwitterMediaType,
  TwitterUserType,
} from "src/type/twitter/type";
import { dayjsConversion } from "src/lib/dayjs";

export const TwitterContents: FC<{
  data: TweetType;
  users: TwitterUserType[];
  media: TwitterMediaType[];
}> = ({ data, users, media }) => {
  const currentUser = users.find((user) => {
    if (user.id === data.author_id) {
      return user;
    }
  });

  const currentMedia = media?.filter((item) => {
    return data.attachments?.media_keys.map((media_key) => {
      if (item.media_key === media_key) {
        return item;
      }
    });
  });

  return (
    <StTwitterContents>
      <div className="wrapper">
        <a
          href={`https://twitter.com/${currentUser?.username}`}
          target="_blank"
          rel="noreferrer"
          className="inline-block"
        >
          <Avatar
            src={currentUser?.profile_image_url}
            alt={currentUser ? `${currentUser?.name}の画像` : "デモ画像"}
            radius="xl"
          />
        </a>
        <Box>
          <div className="ttlDiv">
            <a
              href={`https://twitter.com/${currentUser?.username}`}
              target="_blank"
              rel="noreferrer"
            >
              <span className="name">{currentUser?.name}</span>
            </a>
            <span className="info">
              @{currentUser?.username}・
              {dayjsConversion(data.created_at, "YYYY年MM月DD日")}
            </span>
          </div>
          <div className="contents">{data.text}</div>
          {currentMedia?.map((item) => {
            return (
              <div key={item.media_key} className="mt-2 flex gap-2">
                <div className="mediaImage">
                  <Image src={item.preview_image_url} layout="fill" />
                </div>
              </div>
            );
          })}
        </Box>
      </div>
    </StTwitterContents>
  );
};

const StTwitterContents = styled.div`
  &:nth-of-type(n + 2) {
    margin-top: 60px;
  }

  .wrapper {
    display: flex;
    gap: 16px;
    align-items: flex-start;
    padding-right: 30px;

    .ttlDiv {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 5px;
      .name {
        font-weight: 700;
        font-size: 16px;
      }
      .info {
        font-weight: 700;
        font-size: 12px;
        color: #909296;
      }
    }

    .contents {
      font-size: 14px;
      a {
        color: #228be6;
      }
    }

    .mediaImage {
      width: 100%;
      height: 250px;
      position: relative;

      img {
        object-fit: cover;
      }
    }
  }
`;
