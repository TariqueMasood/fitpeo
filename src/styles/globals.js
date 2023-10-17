import { css } from "@emotion/react";
import theme from "./theme";

export default css`
  html,
  body {
    padding: 0;
    margin: 0;
    overflow-x: hidden;
    color: ${theme.colors.primaryText};
    font-family: Poppins, sans-serif;
    background: ${theme.colors.coolGray400};

    #root {
      height: 100%;
    }

    button {
      cursor: pointer;
    }

    a {
      text-decoration: none;
    }
  }
`;
