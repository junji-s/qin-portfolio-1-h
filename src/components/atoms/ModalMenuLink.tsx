import React, { FC } from "react";
import Link from "next/link";

export const ModalMenuLink: FC<{
  text: string;
  href: string;
  setOpened: any;
}> = ({ text, href, setOpened }) => {
  return (
    <Link href={href}>
      <a className="u-avenir-bold text-2xl" onClick={() => setOpened(false)}>
        {text}
      </a>
    </Link>
  );
};
