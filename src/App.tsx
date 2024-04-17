import { Outlet } from "react-router-dom";
import LandingLayout from "./layouts/Landing/landing.layout";

function App() {
  return (
    <LandingLayout>
      <Outlet />
    </LandingLayout>
  );
}

export default App;
