import type { NextPage } from "next";
import { useRouter } from 'next/router'
import Script from 'next/script'

const InstaPay: NextPage = () => {
  const router = useRouter()
  return (
    <Script 
        src="https://js.instamojo.com/v1/checkout.js" 
        onLoad={() => {
          /* Start client-defined Callback Handler Functions */
          function onOpenHandler () {
            alert('Payments Modal is Opened');
          }

          function onCloseHandler () {
            alert('Payments Modal is Closed');
          }

          function onPaymentSuccessHandler (response) {
            alert('Payment Success');
            console.log('Payment Success Response', response);
            router.push('/payment-success')
          }

          function onPaymentFailureHandler (response) {
            alert('Payment Failure');
            console.log('Payment Failure Response', response);
            router.back();
          }
          /* Configuring Handlers */
          Instamojo.configure({
            handlers: {
              onOpen: onOpenHandler,
              onClose: onCloseHandler,
              onSuccess: onPaymentSuccessHandler,
              onFailure: onPaymentFailureHandler
            }
          });
          
          /* End client-defined Callback Handler Functions */
          Instamojo.open("https://www.instamojo.com/@worldofupbringing/lf22a3a1577be4376a07fa129a9bed529");
        }}
      />
  )
}

export default InstaPay;