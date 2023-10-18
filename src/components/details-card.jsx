/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import GainLoss from "./gain-loss";
import theme from "../styles/theme";
import { mq } from "../styles/breakpoints";

const DetailsCard = (props) => {
  return (
    <div css={cardContainer}>
      <div css={circleIcon} className="icons">
        {props.icon}
      </div>
      <div>
        <div css={cardTitle}>{props.title}</div>
        <div css={cardAmount}>${props.amount}k</div>
        <GainLoss percentage={props.percentage} />
      </div>
    </div>
  );
};

export default DetailsCard;

const cardContainer = css`
  display: flex;
  flex: 1 0 auto;
  padding: 1em;
  background: #fff;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 1em;

  :nth-of-type(1) {
    .icons {
      background: #a2e6aea3;

      svg {
        color: #359f35;
      }
    }
  }

  :nth-of-type(2) {
    .icons {
      background: #c1bef4;

      svg {
        color: #821bd2;
      }
    }
  }

  :nth-of-type(3) {
    .icons {
      background: #abf0f2;

      svg {
        color: #4c869f;
      }
    }
  }

  :nth-of-type(4) {
    .icons {
      background: #f5c7c7;

      svg {
        color: #b74f4f;
      }
    }
  }
`;

const circleIcon = css`
  width: ${80 / 16}rem;
  height: ${80 / 16}rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    display: block;
    width: ${40 / 16}rem;
    height: ${40 / 16}rem;
  }
`;

const cardTitle = css`
  font-size: ${12 / 16}rem;
  color: ${theme.colors.coolGray600};
`;

const cardAmount = css`
  font-size: ${20 / 16}rem;
  font-weight: 600;
`;
