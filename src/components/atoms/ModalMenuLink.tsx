import React, { FC } from "react";
import Link from "next/link";

export const ModalMenuLink: FC<{ text: string; href: string }> = ({
  text,
  href,
}) => {
  return (
    <Link href={href}>
      <a className="u-avenir-bold text-2xl">{text}</a>
    </Link>
  );
};
