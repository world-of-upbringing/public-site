import { useRouter } from "next/router";
import Script from "next/script";
import { useEffect } from "react";
import { CONSULTATION_PAYMENT_LINK } from "../../common/constants";

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
      console.log("unmounting component...");
      router.events.off("routeChangeStart", exitingFunction);
    };
  }, [router.events]);

  return (
    <Script
      src="https://js.instamojo.com/v1/checkout.js"
      onReady={() => {
        /* Start client-defined Callback Handler Functions */
        function onOpenHandler() {
          console.log("Payments Modal is Opened");
        }

        function onCloseHandler() {
          console.log("Payments Modal is Closed");
        }

        function onPaymentSuccessHandler(response: any) {
          console.log("Payment Success Response", response);
          router.push(
            `${success_callback}?transactionId=${response.paymentId}`
          );
        }

        function onPaymentFailureHandler(response: any) {
          console.log("Payment Failure Response", response);
          router.push(`${failure_callback}?status=${response.status}`);
        }
        /* Configuring Handlers */
        window.Instamojo.configure({
          handlers: {
            onOpen: onOpenHandler,
            onClose: onCloseHandler,
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
