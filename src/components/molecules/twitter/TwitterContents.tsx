import styled from "@emotion/styled";
import React, { FC } from "react";

import { Avatar, Box } from "@mantine/core";
import Link from "next/link";

export const TwitterContents: FC = () => {
  return (
    <StTwitterContents>
      <div className="wrapper">
        <Link href="">
          <a>
            <Avatar src="/img/avator.png" alt="it's me" />
          </a>
        </Link>
        <Box>
          <div className="ttlDiv">
            <Link href="">
              <a>
                <span className="name">しまぶーのIT大学</span>
              </a>
            </Link>
            <span className="info">@shimabu_it・5月25日</span>
          </div>
          <div className="contents">
            📣 新サービス「Noway Form」をリリースしました！
            <br />
            <br />
            Noway
            Formは、Notionのデータベースをもとにフォームを作成できるサービスです。これまでGoogle
            FormsでやっていたことがNotionだけで完結します✌✨
            <br />
            試しに使っていただけると幸いです😊
            <br />
            <br />
            <a href="">https://www.noway-form.com/ja</a>
          </div>
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
  }
`;
