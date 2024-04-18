import { Outlet, useLocation } from "react-router-dom";
import LandingLayout from "./layouts/Landing/landing.layout";
import { useEffect } from "react";
import TalkToUsLayout from "./layouts/TalkToUs/talkToUs.layout";

function App() {
  const { pathname } = useLocation();

  if (["/talk-to-us"].includes(pathname)) {
    return (
      <TalkToUsLayout>
        <Outlet />
      </TalkToUsLayout>
    );
  }

  return (
    <LandingLayout>
      <Outlet />
    </LandingLayout>
  );
}

export default App;
