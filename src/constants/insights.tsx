import { v4 as uuidv4 } from "uuid";

import InsightImgOne from "@/assets/imgs/insights/insights-1.svg";
import InsightImgTwo from "@/assets/imgs/insights/insights-2.svg";
import InsightImgThree from "@/assets/imgs/insights/insights-3.svg";

export const INSIGHTS = [
  {
    id: uuidv4(),
    title: "New Study",
    img: InsightImgOne,
    caption: "Climate Change and Crop Yields",
    order: 1,
  },
  {
    id: uuidv4(),
    title: "Analysis",
    img: InsightImgTwo,
    caption: "Using Scenario-Analysis and Climate Risk Assessments",
    order: 2,
  },
  {
    id: uuidv4(),
    title: "EU Regulation",
    img: InsightImgThree,
    caption: "Climate Reporting Requirements in CSRD",
    order: 3,
  },
];
