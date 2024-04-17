import { v4 as uuidv4 } from "uuid";

import InsightImgOne from "@/assets/imgs/insights/insights-1.svg";
import InsightImgTwo from "@/assets/imgs/insights/insights-2.svg";
import InsightImgThree from "@/assets/imgs/insights/insights-3.svg";

export const INSIGHTS = [
  {
    id: uuidv4(),
    title: "White paper",
    date: "April 12, 2024",
    img: InsightImgOne,
    caption: "Sustainable News as a Market Signal",
  },
  {
    id: uuidv4(),
    title: "White paper",
    date: "April 12, 2024",
    img: InsightImgTwo,
    caption: "Sustainable News as a Market Signal",
  },
  {
    id: uuidv4(),
    title: "White paper",
    date: "April 12, 2024",
    img: InsightImgThree,
    caption: "Sustainable News as a Market Signal",
  },
];
