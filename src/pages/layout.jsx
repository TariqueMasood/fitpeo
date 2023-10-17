/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import SideBar from "../components/sidebar";
import { Outlet } from "react-router-dom";
import theme from "../styles/theme";
import { mq } from "../styles/breakpoints";

const Layout = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div css={layoutCss}>
      <SideBar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <div css={contentWrapperCss(isOpen)}>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;

const layoutCss = css`
  background: ${theme.colors.coolGray400};
`;

const contentWrapperCss = (isActive) => css`
  max-width: ${1200 / 16}rem;
  padding-top: 1.5em;
  padding-bottom: 1.5em;
  padding-right: 1.5em;
  padding-left: 1.5em;
  margin: 0 auto;
  transition: all 0.2s linear;

  ${mq("lg")} {
    padding-left: ${isActive ? "264px" : "1.5em"};
  }
`;
