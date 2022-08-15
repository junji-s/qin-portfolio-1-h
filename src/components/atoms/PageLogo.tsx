import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export const PageLogo = () => {
  const router = useRouter();

  return (
    <>
      <Link href="/">
        <a>
          {router.pathname === "/" ? (
            <h1 className="u-avenir-bold text-[18px] font-bold">
              Shimabu IT University
            </h1>
          ) : (
            <div className="u-avenir-bold text-[18px] font-bold">
              Shimabu IT University
            </div>
          )}
        </a>
      </Link>
    </>
  );
};
