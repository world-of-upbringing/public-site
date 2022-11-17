import {
  faAnchor,
  faChild,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons";
import HorizontalHighlights from "../common/horizontalHighlights";

export default function GetToKnowUs() {
  return (
    <HorizontalHighlights
      icons={[faAnchor, faChild, faChartLine]}
      texts={["Confidentiality", "1-1 counselling", "Actionable Solutions"]}
    />
  );
}
