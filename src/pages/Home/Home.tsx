import Footer from "@/components/Footer/Footer";
import IntroductionSection from "./Sections/Introduction/Introduction";
import MapBasedAnalyticsSection from "./Sections/MapBasedAnalytics/MapBasedAnalytics";
import PhilosophySection from "./Sections/Philosophy/Philosophy";
import UpToDateSection from "./Sections/UpToDate/UpToDate";

const HomePage = () => {
  return (
    <>
      <IntroductionSection />
      <PhilosophySection />
      <MapBasedAnalyticsSection />
      <UpToDateSection />
      <Footer />
    </>
  );
};

export default HomePage;
