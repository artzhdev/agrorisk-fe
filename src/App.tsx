import { Outlet, useLocation } from "react-router-dom";
import LandingLayout from "./layouts/Landing/landing.layout";
import TalkToUsLayout from "./layouts/TalkToUs/talkToUs.layout";
import useScrollToAnchor from "./hooks/useScrollToAnchor";
import InsightLayout from "./layouts/Insight/insightLayout";

function App() {
  const { pathname } = useLocation();

  useScrollToAnchor();

  if (["/talk-to-us"].includes(pathname)) {
    return (
      <TalkToUsLayout>
        <Outlet />
      </TalkToUsLayout>
    );
  }

  if (pathname.startsWith("/insights")) {
    return (
      <InsightLayout>
        <Outlet />
      </InsightLayout>
    );
  }

  return (
    <LandingLayout>
      <Outlet />
    </LandingLayout>
  );
}

export default App;
