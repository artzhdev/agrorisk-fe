import App from "@/App";
import HomePage from "@/pages/Home/Home";
import TalkToUsPage from "@/pages/TalkToUs/TalkToUs";
import { createHashRouter } from "react-router-dom";

export const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/talk-to-us",
        element: <TalkToUsPage />,
      },
    ],
  },
]);
