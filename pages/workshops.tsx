import Container from "../components/common/container";
import { H2 } from "../components/common/wouH";
import WouP from "../components/common/wouP";
import PageWrapper from "../components/header/pageWrapper";
import Workshops from "../components/home/workshops";

export default function WorkshopPage() {
  return (
    <PageWrapper>
      <Container>
        <div className="min-h-screen">
          <H2>Flagship Programs of World of Upbringing</H2>
          <WouP>
            Marriage / Relationships & Mental Health Wellness are like the Pasta
            & Cheese. Both go hand in hand. We cannot expect a person to be
            mentally healthy, if he or she has a, or is surrounded by toxic
            relationships or vice versa.
          </WouP>
          <WouP>
            Ila Asthana – CERTIFIED ADVANCED MARRIAGE & FAMILY THERAPIST, &
            ASPIRING POSTPARTUM DOULA conduct Workshops or Webinars periodically
            on topics related to Marriage & Mental Health Wellness. Here are our
            FIVE FLAGSHIP PROGRAMS giving comprehensive insight & structured
            guidance for a holistic life. All our sessions happen in ENGLISH &
            TAMIL. NO REFUNDS. NO CANCELLATIONS.
          </WouP>
          <div className="mt-5">
            <Workshops />
          </div>
        </div>
      </Container>
    </PageWrapper>
  );
}
