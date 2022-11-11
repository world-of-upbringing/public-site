import { useRouter } from "next/router";
import InstaPay from "../../components/instapay";
import Header from "../header/header";

export default function Pay() {
  const router = useRouter();
  const query = router.query;
  const url = query.url as string;
  const mode = query.mode as string;

  return (
    <>
      <Header />
      <div id="body">
        <InstaPay
          url={url}
          success_callback={
            mode === "consultation" ? `/appointment/book` : `/payment/success`
          }
          failure_callback="/payment/failure"
        />
      </div>
    </>
  );
}
