/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { TbHexagonLetterD } from "react-icons/tb";
import theme from "../styles/theme";
import SidebarMenu from "./sidebar-menu";
import { mq } from "../styles/breakpoints";

const SideBar = (props) => {
  return (
    <aside css={sidebarContainer(props.isOpen)}>
      <div css={hamburgerMenuCss} onClick={props.toggleSidebar}>
        <GiHamburgerMenu />
      </div>
      <div css={sidebarTitle}>
        <TbHexagonLetterD />
        <div>Dashboard</div>
      </div>
      <SidebarMenu toggleSidebar={props.toggleSidebar} />
    </aside>
  );
};

export default SideBar;

const sidebarContainer = (isActive) => css`
  max-width: ${240 / 16}rem;
  width: 100%;
  background-color: ${theme.colors.themeColor};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 99;
  transition: all 0.2s linear;
  margin-left: ${isActive ? "-240px" : "0"};

  ${mq("lg")} {
    margin-left: ${isActive ? "0" : "-240px"};
  }
`;

const hamburgerMenuCss = css`
  position: absolute;
  width: 2em;
  height: 2em;
  background-color: ${theme.colors.themeColor};
  right: -2em;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  border-radius: 0 16px 16px 0;
  cursor: pointer;
  top: 1em;
`;

const sidebarTitle = css`
  display: flex;
  gap: 0.3em;
  align-items: center;
  font-size: ${20 / 16}rem;
  padding: 1.5em;
  color: ${theme.colors.white};
`;
