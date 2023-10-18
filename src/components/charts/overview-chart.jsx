/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Bar, BarChart, Cell, ResponsiveContainer, XAxis } from "recharts";
import overviewData from "../../data/overview-chart-data.js";
import theme from "../../styles/theme.js";
import { mq } from "../../styles/breakpoints.js";
import { useCallback, useState } from "react";

const OverviewChart = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = overviewData[activeIndex];

  const handleClick = useCallback(
    (entry, index) => {
      setActiveIndex(index);
    },
    [setActiveIndex]
  );

  return (
    <div css={containerCss}>
      <div css={chartHeaderCss}>
        <div>
          <div css={titleCss}>Overview</div>
          <div css={subtitleCss}>Monthy Earning</div>
        </div>
        <div>
          <select name="period" id="period" css={selectCss}>
            <option value="12">Yearly</option>
            <option value="9">9 months</option>
            <option value="6">6 months</option>
            <option value="3">3 months</option>
          </select>
        </div>
      </div>
      <div css={chartContainer}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart width={150} height={40} data={overviewData}>
            <Bar dataKey="uv" fill="#0f06a7" radius={8} onClick={handleClick}>
              {overviewData.map((entry, index) => (
                <Cell
                  cursor="pointer"
                  fill={index === activeIndex ? "#302b8d" : "#e8e7f9"}
                  key={`cell-${index}`}
                />
              ))}
            </Bar>
            <XAxis dataKey="name" tickLine={false} axisLine={false} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default OverviewChart;

const containerCss = css`
  background-color: ${theme.colors.white};
  padding: 1.5em;
  border-radius: 8px;
`;

const chartContainer = css`
  height: 250px;
  width: 250px;

  ${mq("sm")} {
    height: 250px;
    width: 350px;
  }

  ${mq("md")} {
    height: 250px;
    width: 500px;
  }

  ${mq("lg")} {
    height: 250px;
    width: 700px;
  }
`;

const chartHeaderCss = css`
  display: flex;
  justify-content: space-between;
`;

const titleCss = css`
  font-size: ${14 / 16}rem;
  font-weight: 700;
  color: ${theme.colors.black};
`;

const subtitleCss = css`
  font-size: ${10 / 16}rem;
  color: ${theme.colors.coolGray600};
`;

const selectCss = css`
  background: ${theme.colors.coolGray400};
  outline: none;
  border: 1px solid ${theme.colors.coolGray400};
  padding: 0.3em 0.5em;
  border-radius: 5px;
  color: ${theme.colors.coolGray900};
`;
