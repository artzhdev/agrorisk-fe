import { v4 as uuidv4 } from "uuid";

export const NAVBAR_LINKS = [
  {
    id: uuidv4(),
    title: "Product",
    to: "/#mapBasedAnalytics",
  },
  {
    id: uuidv4(),
    title: "About Us",
    to: "/#aboutUs",
  },
  {
    id: uuidv4(),
    title: "Insights",
    to: "/#insights",
  },
];

export const FOOTER_LINKS = [
  {
    title: "Company",
    id: uuidv4(),
    items: [
      {
        id: uuidv4(),
        title: "About Us",
        to: "/#aboutUs",
      },
      {
        id: uuidv4(),
        title: "Insights",
        to: "/#insights",
      },
      {
        id: uuidv4(),
        title: "Contact",
        to: "/talk-to-us#contacts",
      },
      {
        id: uuidv4(),
        title: "LinkedIn",
        to: "https://www.linkedin.com/company/envira-aps",
      },
    ],
  },
  {
    title: "Product",
    id: uuidv4(),
    items: [
      {
        id: uuidv4(),
        title: "Solution",
        to: "/#intuitiveSoftwareSolution",
      },
      {
        id: uuidv4(),
        title: "Data",
        to: "/#exploreOurData",
      },
    ],
  },
  {
    title: "Envira Aps",
    id: uuidv4(),
    items: [
      {
        id: uuidv4(),
        title: "Applebys Plads 7, 1411 Copenhagen K, Denmark CVR: 44186217",
        to: "#",
      },
    ],
  },
];
