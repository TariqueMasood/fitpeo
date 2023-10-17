/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { BiSearch } from "react-icons/bi";
import { mq } from "../styles/breakpoints";
import theme from "../styles/theme";

const data = [
  {
    id: 1,
    name: "John",
    email: "john@email.com",
    address: "Mumbai",
  },
  {
    id: 2,
    name: "Jane",
    email: "jane@email.com",
    address: "Hyderabad",
  },
  {
    id: 3,
    name: "James",
    email: "james@email.com",
    address: "Delhi",
  },
];

const Customers = () => {
  return (
    <div css={containerCss}>
      <div css={headerCss}>
        <div css={headerTitle}>
          <span>Our Customers</span>
        </div>
        <div css={actionCss}>
          <div css={headerSearchBar}>
            <BiSearch />
            <input type="text" placeholder="Search.." name="search" />
          </div>
          <div>
            <select name="period" id="period" css={selectCss}>
              <option value="30">Last 30 days</option>
              <option value="60">Last 60 days</option>
              <option value="90">Last 90 days</option>
            </select>
          </div>
        </div>
      </div>
      <div css={tableContainer}>
        <table css={tableStyles}>
          <thead>
            <tr css={tableHeaderCss}>
              <th>#ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Customers;

const containerCss = css`
  background-color: ${theme.colors.white};
  padding: 1.5em;
  border-radius: 8px;
`;

const tableContainer = css`
  overflow-x: auto;
  width: 100%;
`;

const tableStyles = css`
  width: 100%;
  border-collapse: collapse;
  margin: 1em 0;
  font-size: ${12 / 16}rem;

  th,
  td {
    padding: 8px;
    text-align: left;
  }

  tr,
  td {
    white-space: nowrap;
  }

  th {
    background: ${theme.colors.white};
  }

  ${mq("md")} {
    overflow-x: auto;
  }
`;

const headerCss = css`
  display: flex;
  flex-direction: column-reverse;
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

const actionCss = css`
  display: flex;
  flex-direction: column;
  gap: 1em;

  ${mq("sm")} {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const headerSearchBar = css`
  display: flex;
  align-items: center;
  background: ${theme.colors.coolGray700};
  border: 1px solid #e4e4e4;
  border-radius: 5px;

  input {
    outline: none;
    border: 1px solid transparent;
    border-radius: 0 5px 5px 0;
    padding: 0.2em;
    background: transparent;
    max-width: 130px;
  }

  svg {
    display: block;
    background-color: ${theme.colors.coolGray700};
    padding: 0 0.2em;
    border-radius: 5px 0 0 5px;
  }
`;

const selectCss = css`
  background: ${theme.colors.coolGray700};
  outline: none;
  border: 1px solid ${theme.colors.coolGray400};
  padding: 0.3em 0.5em;
  border-radius: 5px;
  color: ${theme.colors.coolGray900};
`;

const tableHeaderCss = css`
  color: ${theme.colors.coolGray500};
  font-size: ${12 / 16}rem;
  background: ${theme.colors.white};
  font-weight: 400;
  border-bottom: 1px solid ${theme.colors.coolGray500};
`;

const stockCss = css`
  font-size: 12px;
`;

const priceCss = css`
  font-size: 12px;
  font-weight: 600;
`;

const totalSaleCss = css`
  font-size: 12px;
`;
