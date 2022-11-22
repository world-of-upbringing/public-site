import Link from "next/link";
import { CONSULTATION_PAYMENT_LINK } from "../lib/constants";
import Button from "../components/common/button";
import Container from "../components/common/container";
import { H2 } from "../components/common/wouH";
import WouP from "../components/common/wouP";
import PageWrapper from "../components/header/pageWrapper";

export default function ConsultationPage({
  paymentLink,
}: {
  paymentLink: string;
}) {
  return (
    <PageWrapper title="Consultations">
      <Container>
        <div className="h-screen">
          <H2>Consultations</H2>
          <WouP>
            World of Upbringing offers One-to-One Consultations & Couple
            Counselling to explore, explain and experience the journey of
            healing. We offer consultations connected to various personal &
            inter-personal topics such as:
          </WouP>
          <div className="my-5 mx-4">
            <ul className="list-disc">
              <li>Pre-Marriage Counseling</li>
              <li>Post-Marriage Counseling</li>
              <li>Intimacy in a Couple</li>
              <li>Divorce Healing</li>
              <li>Money & Marriage</li>
              <li>
                Conscious & Gentle Parenting & Nurturing Parent-Children
                Relationship
              </li>
              <li>Postpartum Maternal Care & Mental Health Wellness</li>
              <li>
                Self-awareness & Boundary Setting in Personal & Professional
                Space
              </li>
              <li>Stress, Anxiety, Anger & Time Management</li>
              <li>Peer Pressure Handling & Procrastination</li>
              <li>Grief Counseling</li>
              <li>Inner Child Healing</li>
              <li>Workspace Communication & Emotions Management</li>
            </ul>
          </div>

          <div className="flex">
            <Link
              href={{
                pathname: "/payment",
                query: {
                  url: paymentLink,
                  mode: "consultation",
                },
              }}
            >
              <a className="mx-auto">
                <Button>Book an appointment</Button>
              </a>
            </Link>
          </div>
        </div>
      </Container>
    </PageWrapper>
  );
}

export async function getStaticProps() {
  return {
    props: {
      paymentLink: CONSULTATION_PAYMENT_LINK,
    },
  };
}
