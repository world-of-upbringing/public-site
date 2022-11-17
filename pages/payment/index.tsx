import { useRouter } from "next/router";
import Container from "../../components/common/container";
import InstaPay from "../../components/external/instapay";
import PageWrapper from "../../components/header/pageWrapper";

export default function PaymentPage() {
  const router = useRouter();
  const query = router.query;
  const url = query.url as string;
  const mode = query.mode as string;

  return (
    <PageWrapper title="Payment">
      <Container>
        <InstaPay
          url={url}
          success_callback={mode === "consultation" ? `/appointment` : `/`}
          failure_callback="/payment/failure"
        />
      </Container>
    </PageWrapper>
  );
}
