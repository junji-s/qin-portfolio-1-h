import React, { FC } from "react";
import Link from "next/link";

export const HeaderLink: FC<{ text: string; href: string }> = ({
  text,
  href,
}) => {
  return (
    <Link href={href}>
      <a className="u-avenir-bold text-[18px] font-bold leading-none">{text}</a>
    </Link>
  );
};
