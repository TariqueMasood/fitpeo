/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { BsArrowUpShort, BsArrowDownShort } from "react-icons/bs";

const GainLoss = (props) => {
  return (
    <span css={gainLossContainer}>
      <span css={percentageCss(props.percentage > 0)}>
        {props.percentage < 0 ? <BsArrowUpShort /> : <BsArrowDownShort />}
        {props.percentage} %
      </span>
      <span css={textCss}>this month</span>
    </span>
  );
};

export default GainLoss;

const gainLossContainer = css`
  display: flex;
  align-items: center;
  gap: 0.2em;
`;

const percentageCss = (isPositive) => css`
  color: ${isPositive ? "green" : "red"};
  font-size: 12px;
  font-weight: 700;
  display: flex;
  align-items: center;

  svg {
    font-size: 13px;
  }
`;

const textCss = css`
  font-size: 10px;
  font-weight: 600;
`;
