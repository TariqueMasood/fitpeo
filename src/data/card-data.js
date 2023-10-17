import { BiDollarCircle } from "react-icons/bi";
import { LiaFileAltSolid } from "react-icons/lia";
import { TbCoins } from "react-icons/tb";
import { SlHandbag } from "react-icons/sl";

const cardData = [
  {
    id: 1,
    icon: <BiDollarCircle />,
    title: "Earning",
    amount: 198,
    percentage: 8,
  },
  {
    id: 2,
    icon: <LiaFileAltSolid />,
    title: "Orders",
    amount: 2.4,
    percentage: -7,
  },
  {
    id: 3,
    icon: <TbCoins />,
    title: "Balance",
    amount: 1.6,
    percentage: 2,
  },
  {
    id: 4,
    icon: <SlHandbag />,
    title: "Total Sales",
    amount: 98,
    percentage: -4,
  },
];

export default cardData;
