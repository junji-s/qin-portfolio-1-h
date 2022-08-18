import React from "react";
import styled from "@emotion/styled";

import { Container, Text } from "@mantine/core";
import { Title } from "@mantine/core";
import { SnsList } from "src/components/molecules/SnsList";

export const IndexFv = () => {
  return (
    <StIndexFv>
      <Container>
        <div className="wrapper items-center xs:flex">
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
    font-size: 25px;
    color: #fff;

    @media (min-width: 576px) {
      font-size: 36px;
    }
  }

  .wrapper {
    padding: 50px 0;

    @media (min-width: 576px) {
      padding: 85px 0;
    }

    .right {
      margin-left: auto;
      margin-top: 30px;

      @media (min-width: 576px) {
        margin-top: 0;
      }
    }
  }
`;
