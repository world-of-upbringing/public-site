import { useRouter } from "next/router";
import Script from "next/script";
import { useEffect } from "react";

type StatusCallback = (paymentId: string, status: string) => void;
type CloseCallback = () => void;

export default function InstaPay({
  url,
  statusCallback,
  closeCallback,
}: {
  url: string;
  statusCallback: StatusCallback;
  closeCallback: CloseCallback;
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
          statusCallback(response.paymentId, response.status);
        }

        function onPaymentFailureHandler(response: any) {
          statusCallback(response.paymentId, response.status);
        }

        function onClose() {
          window.Instamojo.configure({
            onSuccess: null,
            onFailure: null,
            onClose: null,
            onOpen: null,
          });
          closeCallback();
        }

        /* Configuring Handlers */
        window.Instamojo.configure({
          handlers: {
            onSuccess: onPaymentSuccessHandler,
            onFailure: onPaymentFailureHandler,
            onClose: onClose,
          },
        });

        /* End client-defined Callback Handler Functions */
        window.Instamojo.open(url);
      }}
    />
  );
}
