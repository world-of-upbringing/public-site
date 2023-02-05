import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Button from "../../components/common/button";
import Container from "../../components/common/container";
import InstaPay from "../../components/external/instapay";
import PageWrapper from "../../components/header/pageWrapper";
import { CONSULTATION_PAYMENT_LINK } from "../../lib/constants";
import * as gtag from "../../lib/ga/gtag";

export default function PaymentPage() {
  const router = useRouter();
  const query = router.query;
  const url = query.url as string;
  const mode = query.mode as "consultation" | "workshop";
  const price = +(query.price ?? process.env.WOU_CONSULTATION_PRICE ?? "0");

  useEffect(() => {
    if (url && mode && price) {
      gtag.begin_checkout(price, [
        {
          item_id: url,
          item_name: mode,
        },
      ]);
    }
  }, [mode, url, price]);

  if (!mode || !url || !price) {
    return (
      <PageWrapper title="Payment">
        <Container>
          <div className="min-h-screen">
            <div className="my-4 text-center mx-auto">
              <p>Invalid payment request. Please try again</p>
            </div>
            <div className="my-4">
              <div className="mx-auto w-32">
                <Link href={"/"}>
                  <a>
                    <Button>Go To home</Button>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </PageWrapper>
    );
  }

  const statusCallback = (paymentId: string, status: string) => {
    if (status === "success") {
      gtag.purchase(paymentId, price, [
        {
          item_id: url,
          item_name: mode,
        },
      ]);
    } else {
      gtag.exception(`Payment failed: ${status}`);
    }
  };

  const closeCallback = () => {
    router.push("/");
  };

  return (
    <PageWrapper title="Payment">
      <Container>
        <InstaPay
          url={url ?? CONSULTATION_PAYMENT_LINK}
          statusCallback={statusCallback}
          closeCallback={closeCallback}
        />
      </Container>
    </PageWrapper>
  );
}
