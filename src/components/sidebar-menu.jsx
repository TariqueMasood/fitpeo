/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import {
  MdOutlineDashboard,
  MdPeopleAlt,
  MdCurrencyRupee,
} from "react-icons/md";
import { TbDiscount2, TbMessageCircleQuestion } from "react-icons/tb";
import { RiProductHuntLine } from "react-icons/ri";
import { BiChevronRight } from "react-icons/bi";
import theme from "../styles/theme";
import useViewportWidth from "../hooks/use-viewport-width";

const SidebarMenu = (props) => {
  const isDesktopView = useViewportWidth("lg");
  return (
    <div css={container}>
      <div css={menuContainer}>
        <Link
          to="/"
          css={linkContainerCss}
          onClick={!isDesktopView && props.toggleSidebar}
        >
          <div css={linkTextWrapper}>
            <div css={linkTextCss}>
              <MdOutlineDashboard />
              <div css={linkText}>Dashboard</div>
            </div>
            <BiChevronRight />
          </div>
        </Link>
        <Link
          to="/product"
          css={linkContainerCss}
          onClick={!isDesktopView && props.toggleSidebar}
        >
          <div css={linkTextWrapper}>
            <div css={linkTextCss}>
              <RiProductHuntLine />
              <div css={linkText}>Product</div>
            </div>
            <BiChevronRight />
          </div>
        </Link>
        <Link
          to="/customers"
          css={linkContainerCss}
          onClick={!isDesktopView && props.toggleSidebar}
        >
          <div css={linkTextWrapper}>
            <div css={linkTextCss}>
              <MdPeopleAlt />
              <div css={linkText}>Customers</div>
            </div>
            <BiChevronRight />
          </div>
        </Link>
        <Link
          to="/income"
          css={linkContainerCss}
          onClick={!isDesktopView && props.toggleSidebar}
        >
          <div css={linkTextWrapper}>
            <div css={linkTextCss}>
              <MdCurrencyRupee />
              <div css={linkText}>Income</div>
            </div>
            <BiChevronRight />
          </div>
        </Link>
        <Link
          to="/promote"
          css={linkContainerCss}
          onClick={!isDesktopView && props.toggleSidebar}
        >
          <div css={linkTextWrapper}>
            <div css={linkTextCss}>
              <TbDiscount2 />
              <div css={linkText}>Promote</div>
            </div>
            <BiChevronRight />
          </div>
        </Link>
        <Link
          to="/help"
          css={linkContainerCss}
          onClick={!isDesktopView && props.toggleSidebar}
        >
          <div css={linkTextWrapper}>
            <div css={linkTextCss}>
              <TbMessageCircleQuestion />
              <div css={linkText}>Help</div>
            </div>
            <BiChevronRight />
          </div>
        </Link>
      </div>
      <div css={profileLinkCss}>
        <Link
          to="/profile"
          css={linkContainerCss}
          onClick={!isDesktopView && props.toggleSidebar}
        >
          <div css={linkTextWrapper}>
            <div css={linkTextCss}>
              <TbMessageCircleQuestion />
              <div css={linkText}>Profile</div>
            </div>
            <BiChevronRight />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default SidebarMenu;

const container = css`
  display: flex;
  flex-direction: column;
`;

const menuContainer = css`
  display: flex;
  flex-direction: column;
  gap: 1em;
  padding: 2.5em 1.5em;
`;

const linkContainerCss = css`
  background: ${theme.colors.themeColor};

  svg {
    color: ${theme.colors.coolGray600};
  }
`;

const profileLinkCss = css`
  padding: 0 1.5em;
`;

const linkTextWrapper = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5em;
  border-radius: 4px;

  :hover {
    color: ${theme.colors.white};
    background: ${theme.colors.themeColorLight};
  }
`;

const linkTextCss = css`
  display: flex;
  gap: 0.4rem;
  align-items: center;
  color: ${theme.colors.coolGray600};
`;

const linkText = css`
  font-size: ${12 / 16}rem;
`;
