import Link from "next/link";
import { useRouter } from "next/router";
import Button from "../../components/common/button";
import Container from "../../components/common/container";
import { H2 } from "../../components/common/wouH";
import PageWrapper from "../../components/header/pageWrapper";

export default function PaymentFailurePage() {
  const router = useRouter();
  const query = router.query;

  return (
    <PageWrapper>
      <Container>
        <H2>
          {`ransaction failed, please retry again: ${JSON.stringify(query)}`}
        </H2>
        <Link href="/">
          <a>
            <Button>Return to home</Button>
          </a>
        </Link>
      </Container>
    </PageWrapper>
  );
}
