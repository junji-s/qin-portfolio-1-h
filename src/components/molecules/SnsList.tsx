import React from "react";

import { IconContext } from "react-icons";
import { BsTwitter } from "react-icons/bs";
import { MdRssFeed } from "react-icons/md";
import { BsFacebook } from "react-icons/bs";

import styled from "@emotion/styled";

export const SnsList = () => {
  return (
    <StSnsList>
      <li>
        <a href="">
          <IconContext.Provider value={{ color: "white", size: "22" }}>
            <BsTwitter />
          </IconContext.Provider>
        </a>
      </li>

      <li>
        <a href="">
          <IconContext.Provider value={{ color: "white", size: "22" }}>
            <BsFacebook />
          </IconContext.Provider>
        </a>
      </li>

      <li>
        <a href="">
          <IconContext.Provider value={{ color: "white", size: "22" }}>
            <MdRssFeed />
          </IconContext.Provider>
        </a>
      </li>
    </StSnsList>
  );
};

const StSnsList = styled.ul`
  display: flex;
  li {
    & + li {
      margin-left: 13px;
    }
    a {
      display: inline-block;
    }
  }
`;
