import React, { FC } from "react";
import styled from "@emotion/styled";
import Link from "next/link";
import Image from "next/image";
import { Box, ScrollArea, Text } from "@mantine/core";

type TypePortfolioLink = {
  src: string;
  width: number;
  height: number;
  title: string;
  desc: string;
  date: string;
};

export const PortfolioLink: FC<TypePortfolioLink> = ({
  src,
  width,
  height,
  title,
  desc,
  date,
}) => {
  return (
    <Link href="" passHref>
      <StPortfolioLink>
        <ScrollArea type="never">
          <Image src={src} alt="サムネイル画像" width={width} height={height} />
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
    </Link>
  );
};

const StPortfolioLink = styled.a`
  display: flex;
  flex-direction: column;
  height: 100%;
  transition: all 0.5s;

  img {
    width: 100%;
    aspect-ratio: 157 / 92;
    object-fit: cover;
    transition: all 0.5s;
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
