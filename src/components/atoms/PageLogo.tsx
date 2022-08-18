import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export const PageLogo = () => {
  const router = useRouter();

  return (
    <Link href="/">
      <a className="block text-center">
        {router.pathname === "/" ? (
          <h1 className="u-avenir-bold text-[17px] font-bold leading-none xs:text-[18px]">
            Shimabu IT University
          </h1>
        ) : (
          <div className="u-avenir-bold text-[17px] font-bold leading-none xs:text-[18px]">
            Shimabu IT University
          </div>
        )}
      </a>
    </Link>
  );
};
