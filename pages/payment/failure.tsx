import Link from "next/link";
import { useRouter } from "next/router";
import Button from "../../components/common/button";
import PageWrapper from "../../components/header/pageWrapper";

export default function PaymentFailurePage() {
  const router = useRouter();
  const query = router.query;

  return (
    <PageWrapper>
      <span>
        Transaction failed, please retry again: {JSON.stringify(query)}
      </span>
      <Link href="/">
        <Button>Return to home</Button>
      </Link>
    </PageWrapper>
  );
}
