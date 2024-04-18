import { v4 as uuidv4 } from "uuid";

import chartOne from "@/assets/icons/chart-1.svg";
import chartTwo from "@/assets/icons/chart-2.svg";
import chartThree from "@/assets/icons/chart-3.svg";

export const EXPLORE_OUR_DATA_BUTTONS = [
  {
    id: uuidv4(),
    title: "Field-level data",
    name: "field_level_data",
    icon: chartOne,
  },
  {
    id: uuidv4(),
    title: "Company risk insights",
    name: "company_risk_insights",
    icon: chartTwo,
  },
  {
    id: uuidv4(),
    title: "Portfolio reporting",
    name: "portfolio_reporting",
    icon: chartThree,
  },
];

export const EXPLORE_OUR_DATA_CONTENT = [
  {
    id: uuidv4(),
    title: "Want to know more about Field-level data?",
    name: "field_level_data",
    subtitle: [
      {
        id: uuidv4() + Date.now(),
        title: `
          Field-level data is a leading software tool designed to specifically for
          financial companies to evaluate and quantify climate-related
          risks faced by agricultural farms.
        `,
      },
      {
        id: uuidv4() + Date.now(),
        title: `
          Field-level data offers advanced analytics and data-driven insights to
          help financial institutions and farmers to make informed
          decisions and transition strategies.
        `,
      },
    ],
  },
  {
    id: uuidv4(),
    title: "Want to know more about Company risk insights?",
    name: "company_risk_insights",
    subtitle: [
      {
        id: uuidv4() + Date.now(),
        title: `
          Company risk insights is a leading software tool designed to specifically for
          financial companies to evaluate and quantify climate-related
          risks faced by agricultural farms.
        `,
      },
      {
        id: uuidv4() + Date.now(),
        title: `
          Company risk insights offers advanced analytics and data-driven insights to
          help financial institutions and farmers to make informed
          decisions and transition strategies.
        `,
      },
    ],
  },
  {
    id: uuidv4(),
    title: "Want to know more about Portfolio reporting?",
    name: "portfolio_reporting",
    subtitle: [
      {
        id: uuidv4() + Date.now(),
        title: `
          Portfolio reporting is a leading software tool designed to specifically for
          financial companies to evaluate and quantify climate-related
          risks faced by agricultural farms.
        `,
      },
      {
        id: uuidv4() + Date.now(),
        title: `
          Portfolio reporting offers advanced analytics and data-driven insights to
          help financial institutions and farmers to make informed
          decisions and transition strategies.
        `,
      },
    ],
  },
];
