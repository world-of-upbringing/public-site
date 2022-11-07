import { useRouter } from "next/router";
import Script from "next/script";

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
  return (
    <Script
      src="https://js.instamojo.com/v1/checkout.js"
      onLoad={() => {
        /* Start client-defined Callback Handler Functions */
        function onOpenHandler() {
          console.log("Payments Modal is Opened");
        }

        function onCloseHandler() {
          console.log("Payments Modal is Closed");
        }

        function onPaymentSuccessHandler(response: any) {
          alert(`Payment Success ${response}`);
          console.log("Payment Success Response", response);
          router.push(`${success_callback}?id=${response.paymentId}`);
        }

        function onPaymentFailureHandler(response: any) {
          alert("Payment Failure");
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
        window.Instamojo.open(
          url ?? "https://test.instamojo.com/@mini_asthana/"
        );
      }}
    />
  );
}
