import { useRouter } from "next/router";
import PageWrapper from "../../components/header/pageWrapper";

export default function Success() {
  const router = useRouter();
  const query = router.query;

  return (
    <PageWrapper>
      <div>
        <span>{JSON.stringify(query)}</span>
      </div>
    </PageWrapper>
  );
}
