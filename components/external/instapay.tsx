import { useRouter } from "next/router";
import Script from "next/script";
import { useEffect } from "react";
import { CONSULTATION_PAYMENT_LINK } from "../../lib/constants";

export default function InstaPay({
  url,
  success_callback,
  failure_callback,
}: {
  url: string | undefined;
  success_callback: string;
  failure_callback: string;
}) {
  const router = useRouter();

  useEffect(() => {
    const exitingFunction = () => {
      window.Instamojo.close();
    };

    router.events.on("routeChangeStart", exitingFunction);

    return () => {
      router.events.off("routeChangeStart", exitingFunction);
    };
  }, [router.events]);

  return (
    <Script
      src="https://js.instamojo.com/v1/checkout.js"
      onReady={() => {
        /* Start client-defined Callback Handler Functions */
        function onPaymentSuccessHandler(response: any) {
          router.push(
            `${success_callback}?transactionId=${response.paymentId}`
          );
        }

        function onPaymentFailureHandler(response: any) {
          router.push(`${failure_callback}?status=${response.status}`);
        }
        /* Configuring Handlers */
        window.Instamojo.configure({
          handlers: {
            onSuccess: onPaymentSuccessHandler,
            onFailure: onPaymentFailureHandler,
          },
        });

        /* End client-defined Callback Handler Functions */
        window.Instamojo.open(url ?? CONSULTATION_PAYMENT_LINK);
      }}
    />
  );
}
