/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Cell, Pie, PieChart, ResponsiveContainer, Sector } from "recharts";
import theme from "../../styles/theme.js";
import { useState } from "react";

const data = [
  { name: "65%", value: 650 },
  { name: "20%", value: 200 },
  { name: "15%", value: 150 },
];

const CustomerChart = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  const onPieEnter = (_, index) => {
    setActiveIndex(index);
  };

  const renderActiveShape = (props) => {
    const {
      cx,
      cy,
      innerRadius,
      outerRadius,
      startAngle,
      endAngle,
      fill,
      payload,
    } = props;

    return (
      <g>
        <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
          {payload.name}
        </text>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
        <Sector
          cx={cx}
          cy={cy}
          startAngle={startAngle}
          endAngle={endAngle}
          innerRadius={outerRadius + 6}
          outerRadius={outerRadius + 10}
          fill={fill}
        />
      </g>
    );
  };

  return (
    <div css={containerCss}>
      <div css={chartHeaderCss}>
        <div>
          <div css={titleCss}>Cutomers</div>
          <div css={subtitleCss}>Customers that buy products</div>
        </div>
      </div>
      <div css={chartContainer}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart width={400} height={400}>
            <Pie
              activeIndex={activeIndex}
              activeShape={renderActiveShape}
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={50}
              outerRadius={80}
              fill="#1150aa"
              dataKey="value"
              onMouseEnter={onPieEnter}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default CustomerChart;

const containerCss = css`
  background-color: ${theme.colors.white};
  padding: 1.5em;
  border-radius: 8px;
  max-width: ${250 / 16}rem;
  width: 100%;
  height: 100%;
`;

const chartContainer = css`
  height: 250px;
  width: 250px;
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
