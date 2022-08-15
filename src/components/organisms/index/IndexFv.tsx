import React from "react";
import styled from "@emotion/styled";

import { Container, Text } from "@mantine/core";
import { Title } from "@mantine/core";
import { SnsList } from "src/components/molecules/snsList";

export const IndexFv = () => {
  return (
    <StIndexFv>
      <Container>
        <div className="flex items-center">
          <div className="left">
            <Title className="ttl u-avenir-bold" order={2}>
              Shimabu IT University
            </Title>
            <Text color="white" weight={700}>
              しまぶーのポートフォリオのためのページです
            </Text>
          </div>
          <div className="right">
            <SnsList />
          </div>
        </div>
      </Container>
    </StIndexFv>
  );
};

const StIndexFv = styled.div`
  background: #e64980;

  .ttl {
    font-size: 36px;
    color: #fff;
  }

  .flex {
    padding: 85px 0;

    .right {
      margin-left: auto;
    }
  }
`;
