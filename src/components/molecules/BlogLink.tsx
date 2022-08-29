import { Text } from "@mantine/core";
import Link from "next/link";
import React, { FC } from "react";

export const BlogLink: FC<{
  href: string;
  header: string;
  body: string;
  date: string;
}> = ({ href, header, body, date }) => {
  return (
    <Link href={href}>
      <a className="block bg-white duration-500 hover:bg-gray-100 sm:py-1 sm:px-2">
        <Text size={22} weight="bold">
          {header}
        </Text>
        <Text size={16} my={8} className="... truncate">
          {body}
        </Text>
        <Text size={12}>{date}</Text>
      </a>
    </Link>
  );
};
