import React, { FC } from "react";

import useSWR from "swr";

import { Box, Loader, ScrollArea } from "@mantine/core";

import { StSection } from "src/style/css/layout/StSection";
import { PrimaryTitle } from "src/components/atoms/PrimaryTitle";
import { PrimaryBtn } from "src/components/atoms/PrimaryBtn";
import { TwitterContents } from "src/components/molecules/twitter/TwitterContents";

import { twFetcher } from "src/lib/twitter";
import { TwitterTimeLine } from "src/type/twitter/type";

export const TwitterSection: FC = () => {
  // ツイートを取得
  const { data, error } = useSWR<TwitterTimeLine>("/api/getTweet", twFetcher);

  return (
    <StSection>
      <PrimaryTitle order={2}>Twitter</PrimaryTitle>

      {error ? (
        <div className="text-center font-bold">
          データの取得に失敗しました。。。
        </div>
      ) : data ? (
        <ScrollArea type="auto" style={{ height: 700 }}>
          {data.data.map((item) => {
            return (
              <TwitterContents
                key={item.id}
                data={item}
                users={data.includes.users}
                media={data.includes.media}
              />
            );
          })}
        </ScrollArea>
      ) : (
        <Loader color="red" variant="dots" className="mx-auto" />
      )}

      <Box pt={24} className="text-center">
        <PrimaryBtn href="https://twitter.com/" target>
          View on Twitter
        </PrimaryBtn>
      </Box>
    </StSection>
  );
};
