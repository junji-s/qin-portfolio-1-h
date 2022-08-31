import React, { FC, useState } from "react";
import styled from "@emotion/styled";
import Image from "next/image";
import { Box, ScrollArea, Text } from "@mantine/core";
import { Skeleton } from "@mantine/core";

type TypePortfolioLink = {
  src: string;
  title: string;
  desc: string;
  date: string;
  href: string;
};

export const PortfolioLink: FC<TypePortfolioLink> = ({
  src,
  title,
  desc,
  date,
  href,
}) => {
  const [loading, setLoading] = useState(true);
  const loadingImage = () => {
    setLoading(false);
  };

  return (
    <Skeleton visible={loading}>
      <StPortfolioLink href={href} target="_blank">
        <ScrollArea type="never" className="scrollArea">
          <Image
            src={src}
            alt="サムネイル画像"
            layout="fill"
            onLoadingComplete={loadingImage}
          />
        </ScrollArea>
        <Box pb={5} px={10} className="flex flex-1 flex-col">
          <Text size={22} weight={700} className="... truncate " mt={5} mb={8}>
            {title}
          </Text>
          <Text size="md" mb={15}>
            {desc}
          </Text>
          <Text className="date">{date}</Text>
        </Box>
      </StPortfolioLink>
    </Skeleton>
  );
};

const StPortfolioLink = styled.a`
  display: flex;
  flex-direction: column;
  height: 100%;
  transition: all 0.5s;

  .scrollArea {
    aspect-ratio: 157 / 92;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: all 0.5s;
    }
  }

  .date {
    display: block;
    font-size: 12px;
    color: #909296;
    font-weight: bold;
    margin-top: auto;
  }

  &:hover {
    box-shadow: 0 0 50px #aaa;
    transition: all 0.5s;
    img {
      transform: scale(1.2);
      transition: all 0.5s;
    }
  }
`;
