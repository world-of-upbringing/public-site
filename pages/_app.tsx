import "../styles/globals.css";
import React, { useEffect } from "react";
import type { AppProps } from "next/app";
import { config } from "@fortawesome/fontawesome-svg-core";
import "../node_modules/@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

export {};
declare global {
  interface Window {
    Calendly: any;
    Instamojo: any;
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (typeof window !== undefined) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-var-requires
      const elements = require("tw-elements");
    }
  });

  return <Component {...pageProps} />;
}

export default MyApp;
