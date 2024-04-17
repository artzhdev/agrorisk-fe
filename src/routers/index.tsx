import HomePage from "@/pages/Home/Home";
import { createHashRouter } from "react-router-dom";

export const router = createHashRouter([
  {
    path: "/",
    element: <HomePage />,
  },
]);
