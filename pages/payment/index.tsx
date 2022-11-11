import { useRouter } from "next/router";
import InstaPay from "../../components/external/instapay";
import PageWrapper from "../../components/header/pageWrapper";

export default function Pay() {
  const router = useRouter();
  const query = router.query;
  const url = query.url as string;
  const mode = query.mode as string;

  return (
    <PageWrapper>
      <div id="body">
        <InstaPay
          url={url}
          success_callback={
            mode === "consultation" ? `/appointment` : `/payment/success`
          }
          failure_callback="/payment/failure"
        />
      </div>
    </PageWrapper>
  );
}
