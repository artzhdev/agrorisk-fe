import { title } from "process";
import { v4 as uuidv4 } from "uuid";

export const NAVBAR_LINKS = [
  {
    id: uuidv4(),
    title: "Product",
    to: "#",
  },
  {
    id: uuidv4(),
    title: "Solutions",
    to: "#",
  },
  {
    id: uuidv4(),
    title: "About Us",
    to: "#",
  },
  {
    id: uuidv4(),
    title: "Insights",
    to: "#",
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
        to: "#",
      },
      {
        id: uuidv4(),
        title: "Insights",
        to: "#",
      },
      {
        id: uuidv4(),
        title: "Contact",
        to: "#",
      },
      {
        id: uuidv4(),
        title: "LinkedIn",
        to: "#",
      },
    ],
  },
  {
    title: "Product",
    id: uuidv4(),
    items: [
      {
        id: uuidv4(),
        title: "Data",
        to: "#",
      },
      {
        id: uuidv4(),
        title: "Solutions",
        to: "#",
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
