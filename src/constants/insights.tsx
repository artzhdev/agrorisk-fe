import { v4 as uuidv4 } from "uuid";

import InsightImgOne from "@/assets/imgs/insights/insights-1.svg";
import InsightImgTwo from "@/assets/imgs/insights/insights-2.svg";
import InsightImgThree from "@/assets/imgs/insights/insights-3.svg";

export const INSIGHTS = [
  {
    id: uuidv4(),
    title: "New Study",
    date: "April 12, 2024",
    img: InsightImgOne,
    caption: "Climate Change and Crop Yields",
  },
  {
    id: uuidv4(),
    title: "Analysis",
    date: "April 12, 2024",
    img: InsightImgTwo,
    caption: "Using Scenario-analysis for Flood Risks",
  },
  {
    id: uuidv4(),
    title: "EU Regulation",
    date: "April 12, 2024",
    img: InsightImgThree,
    caption: "Climate Reporting Requirements in CSRD",
  },
];
