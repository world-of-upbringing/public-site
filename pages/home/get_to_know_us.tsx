import {
  faAnchor,
  faChild,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons";
import FrontPageSection from "../../components/front-page-section";
import HorizontalHighlights from "../../components/horizontal-highlights";

export default function GetToKnowUs() {
  return (
    <FrontPageSection
      title="Get to Know Us"
      description="World of Upbringing - Nurturing Values is an affordable Online Marriage & Mental Health Wellness Counselling platform. We are here to LISTEN to your emotional turmoil and act as a CATALYST in your life. The journey with us will empower you to embrace the path of internal & external healing & hailing in life."
      backgroundColor={false}
    >
      <HorizontalHighlights
        icons={[faAnchor, faChild, faChartLine]}
        texts={["Confidentiality", "1-1 counselling", "Actionable Solutions"]}
      />
    </FrontPageSection>
  );
}
