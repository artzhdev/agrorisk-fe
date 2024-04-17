import Footer from "@/components/Footer/Footer";
import IntroductionSection from "./Sections/Introduction/Introduction";
import MapBasedAnalyticsSection from "./Sections/MapBasedAnalytics/MapBasedAnalytics";
import PhilosophySection from "./Sections/Philosophy/Philosophy";
import UpToDateSection from "./Sections/UpToDate/UpToDate";
import InsightsSection from "./Sections/Insights/Insights";
import OurApproachSection from "./Sections/OurApproach/OurApproach";
import DepthAndTransparencySection from "./Sections/DepthAndTransparency/DepthAndTransparency";
import ExploreOurDataSection from "./Sections/ExploreOurData/ExploreOurData";

const HomePage = () => {
  return (
    <>
      <IntroductionSection />
      <PhilosophySection />
      <MapBasedAnalyticsSection />
      <ExploreOurDataSection />
      <DepthAndTransparencySection />
      <OurApproachSection />
      <InsightsSection />
      <UpToDateSection />
      <Footer />
    </>
  );
};

export default HomePage;
