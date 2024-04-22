import { v4 as uuidv4 } from "uuid";

import chartOne from "@/assets/icons/chart-1.svg";
import chartTwo from "@/assets/icons/chart-2.svg";
import chartThree from "@/assets/icons/chart-3.svg";

export const EXPLORE_OUR_DATA_BUTTONS = [
  {
    id: uuidv4(),
    title: "Field-Level Data",
    name: "field_level_data",
    icon: chartOne,
  },
  {
    id: uuidv4(),
    title: "Company Risk Insights",
    name: "company_risk_insights",
    icon: chartTwo,
  },
  {
    id: uuidv4(),
    title: "Portfolio Reporting",
    name: "portfolio_reporting",
    icon: chartThree,
  },
];

export const EXPLORE_OUR_DATA_CONTENT = [
  {
    id: uuidv4(),
    title: "Risk is location-specific",
    name: "field_level_data",
    subtitle: [
      {
        id: uuidv4() + Date.now(),
        title: `
          Climate  risks  such  as flooding  are  extremely 
          location-specific  with significant  differences  in 
          risk-levels  across  even small  distances.
        `,
      },
      {
        id: uuidv4() + Date.now(),
        title: `
          Therefore, our  solution  provide  the 
          most granular data possible at  the  individual  field-level 
          for each farmer.
        `,
      },
    ],
  },
  {
    id: uuidv4(),
    title: "Farm-level insights",
    name: "company_risk_insights",
    subtitle: [
      {
        id: uuidv4() + Date.now(),
        title: `
          Assessing  financial  risks  at the company level is key to 
          determine  credit  risks, insurance  premiums,  and 
          for  improving  customer dialogues.
        `,
      },
      {
        id: uuidv4() + Date.now(),
        title: `
          We  provide  aggregate  risk analytics, comparisons, and 
          financial  insights  for  all farms. 
        `,
      },
    ],
  },
  {
    id: uuidv4(),
    title: "Reporting and risk management made easy",
    name: "portfolio_reporting",
    subtitle: [
      {
        id: uuidv4() + Date.now(),
        title: `
          We  ensure  ongoing  risk management  and  annual 
          portfolio reporting becomes a smooth process.
        `,
      },
      {
        id: uuidv4() + Date.now(),
        title: `
          With  a  single  source  of truth  for  all  data  on  the 
          platform, there are no black boxes  or  inconsistencies  in 
          reporting  to  senior management  or  ensuring 
          compliant ESG reporting. 
        `,
      },
    ],
  },
];
