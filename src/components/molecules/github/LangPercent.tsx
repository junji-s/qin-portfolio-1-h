import styled from "@emotion/styled";
import React, { FC } from "react";

type LangType = {
  name: string;
  percent: number;
  color: string;
};

export const LangPercent: FC<{ lang: LangType[] }> = ({ lang }) => {
  return (
    <StLangPercent>
      {lang.map((item, index) => {
        return (
          <div key={index} className="wrapper">
            <div className="langName u-avenir-bold">
              <span
                className="color"
                style={{ backgroundColor: item.color }}
              ></span>
              {item.name}
            </div>
            <div className="percent">{item.percent}%</div>
          </div>
        );
      })}
    </StLangPercent>
  );
};

const StLangPercent = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px 16px;

  .wrapper {
    display: flex;
    align-items: center;

    .langName {
      font-size: #25262b;
      font-weight: 700;
      .color {
        width: 6px;
        height: 6px;
        display: inline-block;
        border-radius: 50%;
        margin-right: 6px;
      }
    }

    .percent {
      color: #909296;
      font-weight: 700;
      font-size: 12px;
      margin-left: 6px;
    }
  }
`;
