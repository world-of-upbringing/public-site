import Image from "next/image";
import Container from "../components/common/container";
import WouP from "../components/common/wouP";
import PageWrapper from "../components/header/pageWrapper";

export default function AboutUsPage() {
  return (
    <PageWrapper title="About Ila Asthana">
      <Container>
        <div className="min-h-screen">
          <div className="flex flex-auto flex-wrap">
            <div className=" aspect-auto min-w-fit mr-2 mt-4">
              <Image
                src="/images/ila.webp"
                alt="Ila Asthana"
                width="400px"
                height="600px"
              />
            </div>
            <div className="ml-2 mt-2 w-1024">
              <WouP>
                We are what we are, for the experiences that we have lived in
                our life.
              </WouP>
              <WouP>
                Hi! My name is Ila Asthana. I am a Certified Marriage Coach &
                Family Therapist from NNCA, Singapore. I am also a Certified
                Mental Health First Aider (MHFA) from Mental Health First Aid
                India. I am the Founder & Director of the organization - World
                of Upbringing - Nurturing Values.
              </WouP>
              <WouP>
                Until 23, thanks to my childhood & adolescent experiences, I was
                totally against the concept of Marriage & never trusted marriage
                as an institution. But life turned the tables after the arrival
                of my partner, Karthik. Today, the mission of World of
                Uprbigning is to empower unmarried & married individuals &
                couples to sail through the ups & downs of Partnering to
                Parenting.
              </WouP>
              <WouP>
                World of Upbringing is an end-to-end online
                Marriage/Relationship School offering the Best Affordable
                Relationship Care. From knowing how to work on oneself, how to
                choose a partner, how to navigate the courtship period, how to
                be mentally & emotionally prepared for the new married & family
                life, how to balance professional & personal life, and also
                creating an intimate relationship with the partner & succeed at
                parenting & much more only in this space.
              </WouP>
              <WouP>
                As an Aspiring Postpartum Doula, I also facilitate new parents
                to navigate their Postpartum Journey & ensure they work through
                their couple intimacy after becoming parents.
              </WouP>
              <WouP>
                I facilitate all this through 1-1 Online Consultations with
                personalized attention to the individual/couple. Group coaching
                through recorded/live workshops on different topics of
                pre-marriage & post-marriage such as Emotional Regulation,
                Boundaries & Boundary Management, Money Management as a Couple,
                Couple Communication, etc.
              </WouP>
              <WouP>
                Over the past 3 years, I have completed 1000+ consultations,
                conducted 200+ workshops, impacted 750+ families, & reached out
                to facilitate couples & individuals in 12 countries in 5
                different languages. World of Upbringing is your one-stop
                solution for pre-marriage & post-marriage life turbulences.
              </WouP>
              <WouP>
                I am a North Indian, born & brought up in Chennai for 27 years,
                currently based out of Bangalore after Marriage into a TamBrahm
                Family. A perfect blend of different & diagonally opposite
                cultures in India. I speak English, Tamil, Hindi, and Telugu. I
                can understand Kananda & Gujarati. I travel across different
                cities in India for sessions in Schools, Colleges, Corporate
                organizations, NGOs & private gated community gatherings. You
                can follow me on my Instagram handle @worlduprbinging for all
                the weekly updates on sessions & consultations, and new flagship
                programs.
              </WouP>
            </div>
          </div>
          <div className="flex flex-row flex-wrap justify-between w-full">
            <Image
              className="mx-auto my-2"
              src="/images/ila1.webp"
              alt="Ila Asthana"
              width="300px"
              height="450px"
            />
            <Image
              className="mx-auto my-2"
              src="/images/ila2.webp"
              alt="Ila Asthana"
              width="300px"
              height="450px"
            />
            <Image
              className="mx-auto my-2"
              src="/images/ila3.webp"
              alt="Ila Asthana"
              width="300px"
              height="450px"
            />
            <Image
              className="mx-auto my-2"
              src="/images/ila4.webp"
              alt="Ila Asthana"
              width="300px"
              height="450px"
            />
          </div>
        </div>
      </Container>
    </PageWrapper>
  );
}
