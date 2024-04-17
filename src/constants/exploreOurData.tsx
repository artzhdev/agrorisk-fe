import { v4 as uuidv4 } from "uuid";

import chartOne from "@/assets/icons/chart-1.svg";
import chartTwo from "@/assets/icons/chart-2.svg";
import chartThree from "@/assets/icons/chart-3.svg";

export const EXPLORE_OUR_DATA = [
  {
    id: uuidv4(),
    title: "Field-level data",
    icon: chartOne,
  },
  {
    id: uuidv4(),
    title: "Company risk insights",
    icon: chartTwo,
  },
  {
    id: uuidv4(),
    title: "Portfolio reporting",
    icon: chartThree,
  },
];
