import { css } from "@emotion/react";

const Colors = {
  themeColor: "#2a3447",
  themeColorLight: "#384256",
  themeColorDark: "#222b3c",
  primaryText: "#282828",
  default: "#f2f2f2",
  white: "#ffffff",

  // black
  black: "#000000",
  black800: "#4A4A4A",

  //Gray
  coolGray400: "#f4f4f4",
  coolGray500: "#ddd",
  coolGray600: "#ccc",
  coolGray700: "#f4f7fd",
  coolGray900: "#797373",
};

const typography = {
  cardTitle: css`
    font-size: ${18 / 16}rem;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
  `, // 18px

  sectionHeader: css`
    font-size: ${28 / 16}rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  `, // 28px

  subtitleText: css`
    font-size: ${22 / 16}rem;
    font-style: normal;
    font-weight: 400;
    line-height: 140.523%; /* 30.915px */
    letter-spacing: 0.11px;
  `, // 22px
};

const borderRadius = {
  default: css`
    border-radius: 8px;
  `,

  none: css`
    border-radius: 0;
  `,

  borderRadius3: css`
    border-radius: 3px;
  `,

  borderRadius4: css`
    border-radius: 4px;
  `,
  borderRadius6: css`
    border-radius: 6px;
  `,
  borderRadius8: css`
    border-radius: 8px;
  `,
  borderRadius12: css`
    border-radius: 12px;
  `,
  borderRadius15: css`
    border-radius: 15px;
  `,
  borderRadius16: css`
    border-radius: 16px;
  `,
};

const boxShadow = {
  default: css`
    box-shadow: 0px 1px 20px 0px rgba(0, 0, 0, 0.1);
  `,
  boxShadowService: css`
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.1);
  `,
  boxShadowNone: css`
    box-shadow: none;
  `,
};

const theme = {
  colors: Colors,
  css: {
    typography,
    borderRadius,
    boxShadow,
  },
};
export default theme;
