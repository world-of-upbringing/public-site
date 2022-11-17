import Container from "../components/common/container";
import { H2 } from "../components/common/wouH";
import WouP from "../components/common/wouP";
import PageWrapper from "../components/header/pageWrapper";

export default function AboutUsPage() {
  return (
    <PageWrapper>
      <Container>
        <div className="min-h-screen">
          <H2>VISION & MISSION</H2>
          <WouP>
            World of Upbringing – Nurturing Values’ envision’s to educate,
            counsel, and raise a conscious generation that is socially and
            emotionally empowered to thrive with a smile.
          </WouP>
          <WouP>
            Our Mission is to create a healthy ecosystem for people of all age
            groups & nurture relationships with values & morals. This is a safe
            space to be vulnerable & valued at the same time.
          </WouP>

          <H2>WHAT & HOW DO WE DO?</H2>
          <WouP>
            We all are equipped to solve our problems. Yet we need someone who
            would listen to our thoughts and opinions without any prejudice.
            World of Upbringing is an affordable ONLINE MARRIAGE & MENTAL HEALTH
            WELLNESS Counselling platform for ALL AGE GROUPS. We are here to
            LISTEN to your emotional turmoil and act as a CATALYST in your life.
            The journey with us will empower you to embrace the path of internal
            & external healing & hailing in life.
          </WouP>
          <WouP>
            We are a FULLY HUMAN-ENABLED platform where the interactions would
            be personalized and discrete. We do not promise to smoothen your
            life overnight. Rather we will help YOU take small, steady, and
            substantial steps towards your goals.
          </WouP>
          <WouP>
            World of Upbringing strongly believes that technology can only act
            as a medium of communication and not a replacement for human
            connect. Consequently, we are NOT A CHATBOT ENABLED PLATFORM
          </WouP>
          <WouP>
            We conduct workshops/classes on Marriage & Mental Health Wellness &
            also offer one-to-one consultations for couples & individuals.
          </WouP>
        </div>
      </Container>
    </PageWrapper>
  );
}
