import React, { FC } from "react";
import Link from "next/link";

import { useRouter } from "next/router";

export const HeaderLink: FC<{ text: string; href: string }> = ({
  text,
  href,
}) => {
  const router = useRouter();
  console.log(router);

  return (
    <Link href={href}>
      <a
        className={`u-avenir-bold leading-non text-[18px] font-bold ${
          router.pathname === "/" + text.toLowerCase()
            ? "border-b-2 border-black"
            : ""
        }`}
      >
        {text}
      </a>
    </Link>
  );
};
