import Link from "next/link";
import Button from "../components/common/button";
import Container from "../components/common/container";
import { H4 } from "../components/common/wouH";
import WouP from "../components/common/wouP";
import PageWrapper from "../components/header/pageWrapper";

export default function Consultation() {
  return (
    <PageWrapper>
      <Container>
        <WouP>
          World of Upbringing offers One-to-One Consultations & Couple
          Counselling to explore, explain and experience the journey of healing.
          We offer consultations connected to various personal & inter-personal
          topics such as:
        </WouP>
        <ul>
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
            Self-awareness & Boundary Setting in Personal & Professional Space
          </li>
          <li>Stress, Anxiety, Anger & Time Management</li>
          <li>Peer Pressure Handling & Procrastination</li>
          <li>Grief Counseling</li>
          <li>Inner Child Healing</li>
          <li>Workspace Communication & Emotions Management</li>
        </ul>

        <Link
          href={{
            pathname: "/payment",
            query: {
              url: "https://test.instamojo.com/@mini_asthana/lc869424fd335422d91b8625989a96361/",
              mode: "consultation",
            },
          }}
        >
          <Button>Book an appointment here</Button>
        </Link>
      </Container>
    </PageWrapper>
  );
}
