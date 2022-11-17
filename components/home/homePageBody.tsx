import BackToTop from "../common/backToTop";
import FrontPageSection from "./frontPageSection";
import GetToKnowUs from "./getToKnowUs";
import Hero from "./hero";
import Patrons from "./patrons";
import Services from "./services";
import Workshops from "./workshops";

export default function HomePageBody() {
  return (
    <div className="flex flex-col">
      <BackToTop />

      <section id="hero" className="h-screen">
        <Hero />
      </section>

      <FrontPageSection
        title="Get to Know Us"
        description={
          "World of Upbringing - Nurturing Values is an affordable Online Marriage & Mental Health Wellness Counselling platform. We are here to LISTEN to your emotional turmoil and act as a CATALYST in your life. The journey with us will empower you to embrace the path of internal & external healing & hailing in life."
        }
        backgroundColor={false}
      >
        <GetToKnowUs />
      </FrontPageSection>

      <FrontPageSection
        title="Workshops"
        description={undefined}
        backgroundColor={true}
      >
        <Workshops />
      </FrontPageSection>

      <FrontPageSection
        title="Service Offerings"
        description={undefined}
        backgroundColor={false}
      >
        <Services />
      </FrontPageSection>

      <FrontPageSection
        title="Patrons of World of Upbringing"
        description={undefined}
        backgroundColor={true}
      >
        <Patrons />
      </FrontPageSection>
    </div>
  );
}
