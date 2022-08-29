import React, { FC } from "react";
import Link from "next/link";

import { useRouter } from "next/router";

export const HeaderLink: FC<{ text: string; href: string }> = ({
  text,
  href,
}) => {
  const router = useRouter();

  return (
    <Link href={href}>
      <a
        className={`u-avenir-bold leading-non border-b-2 border-white text-[18px] font-bold  ${
          router.pathname.indexOf(text.toLowerCase()) !== -1
            ? "border-black"
            : ""
        }`}
      >
        {text}
      </a>
    </Link>
  );
};
