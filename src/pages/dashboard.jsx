/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { BiSearch } from "react-icons/bi";
import { FaRegHandshake } from "react-icons/fa";
import cardData from "../data/card-data";
import { mq } from "../styles/breakpoints";
import theme from "../styles/theme";
import OverviewChart from "../components/charts/overview-chart";
import CustomerChart from "../components/charts/customer-chart";
import DetailsCard from "../components/details-card";
import Customers from "./customers";
import Product from "./product";

const Dashboard = () => {
  return (
    <div>
      <div css={headerCss}>
        <div css={headerTitle}>
          <span>Hello Shahrukh</span>
          <FaRegHandshake />
        </div>
        <div css={headerSearchBar}>
          <BiSearch />
          <input type="text" placeholder="Search.." name="search" />
        </div>
      </div>
      <div css={cardContainer}>
        {cardData.map((item) => (
          <DetailsCard {...item} key={item.id} />
        ))}
      </div>
      <div css={chartContainer}>
        <OverviewChart />
        <CustomerChart />
      </div>
      <div css={productContainer}>
        <Product />
      </div>
      <Customers />
    </div>
  );
};

export default Dashboard;

const chartContainer = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  gap: 2em;
  margin: 2em 0;

  ${mq("md")} {
    flex-wrap: nowrap;
  }
`;

const headerCss = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;

  ${mq("sm")} {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const headerTitle = css`
  display: flex;
  align-items: center;
  gap: 7px;

  span {
    font-size: 1rem;
    font-weight: 600;
  }

  svg {
    display: block;
    color: #e0ac69;
  }
`;

const headerSearchBar = css`
  display: flex;
  align-items: center;
  background: ${theme.colors.white};
  border: 1px solid #e4e4e4;
  border-radius: 5px;
  max-width: ${296 / 16}rem;
  width: 100%;

  input {
    outline: none;
    border: 1px solid transparent;
    border-radius: 0 5px 5px 0;
    padding: 0.7em;
  }

  svg {
    display: block;
    background-color: ${theme.colors.white};
    padding: 0.6em 0.4em;
    border-radius: 5px 0 0 5px;
    width: 21px;
  }
`;

const cardContainer = css`
  display: flex;
  flex-wrap: wrap;
  gap: 2em;
  margin-top: ${40 / 16}em;
`;

const productContainer = css`
  margin-bottom: 2em;
`;
