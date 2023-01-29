import "../styles/globals.css";
import React, { useEffect } from "react";
import type { AppProps } from "next/app";
import { config } from "@fortawesome/fontawesome-svg-core";
import "../node_modules/@fortawesome/fontawesome-svg-core/styles.css";
import { useRouter } from "next/router";
import * as gtag from "../lib/ga/gtag";
import Script from "next/script";
config.autoAddCss = false;

export {};
declare global {
  interface Window {
    Calendly: any;
    Instamojo: any;
    gtag: any;
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  useEffect(() => {
    if (typeof window !== undefined) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-var-requires
      const elements = require("tw-elements");
    }
    const handleRouteChange = (url: string) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script
        id="gtag-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gtag.GA_TRACKING_ID}', {
            page_path: window.location.pathname,
          });
        `,
        }}
      />
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
