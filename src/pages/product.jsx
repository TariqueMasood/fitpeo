/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { BiSearch } from "react-icons/bi";
import { mq } from "../styles/breakpoints";
import theme from "../styles/theme";

const data = [
  {
    id: 1,
    product: {
      name: "Abstract 3D",
      icon: "/images/product-1.jpg",
      description: "Some description",
    },
    stock: 32,
    price: 45.99,
    totalSale: 20,
  },
  {
    id: 2,
    product: {
      name: "Abstract 3D",
      icon: "/images/product-1.jpg",
      description: "Some description",
    },
    stock: 32,
    price: 45.99,
    totalSale: 20,
  },
];

const Product = () => {
  return (
    <div css={containerCss}>
      <div css={headerCss}>
        <div css={headerTitle}>
          <span>Product Sell</span>
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
              <th>Product Name</th>
              <th>Stock</th>
              <th>Price</th>
              <th>Total Sales</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td css={productDescriptionCss}>
                  <img
                    src={item.product.icon}
                    alt={item.product.name}
                    css={productImageCss}
                  />
                  <div css={descriptionContainer}>
                    <span css={nameCss}>{item.product.name}</span>
                    <span css={descriptionCss}>{item.product.description}</span>
                  </div>
                </td>
                <td css={stockCss}>{item.stock} in stock</td>
                <td css={priceCss}>$ {item.price}</td>
                <td css={totalSaleCss}>{item.totalSale}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Product;

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
  font-size: 1rem;

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

const productDescriptionCss = css`
  display: flex;
  gap: 0.5em;
`;

const descriptionContainer = css`
  display: flex;
  flex-direction: column;
`;

const nameCss = css`
  font-size: 1rem;
  font-weight: 600;
`;

const descriptionCss = css`
  color: ${theme.colors.coolGray900};
  font-size: ${12 / 16}rem;
`;

const productImageCss = css`
  width: ${70 / 16}rem;
  border-radius: 4px;
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
