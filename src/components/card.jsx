/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import theme from "../styles/theme";

const Card = (props) => {
  return <div css={cardCss}>{props.children}</div>;
};

export default Card;

const cardCss = css`
  display: flex;
  padding: 1em;
  background: ${theme.colors.white};
  border-radius: 8px;
`;
