import type { AppProps } from "next/app";
import GlobalStyles from "../styles/GlobalStyles";
import "../styles/index.css";
import { useRouter } from "next/router";
import { useEffect } from "react";

import "nprogress/nprogress.css";
import NProgress from "nprogress";

import * as React from "react";
import Layout from "../layout";
import Context from "../context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      center: React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
    }
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteStart = () => NProgress.start();
    const handleRouteDone = () => NProgress.done();

    router.events.on("routeChangeStart", handleRouteStart);
    router.events.on("routeChangeComplete", handleRouteDone);
    router.events.on("routeChangeError", handleRouteDone);

    return () => {
      router.events.off("routeChangeStart", handleRouteStart);
      router.events.off("routeChangeComplete", handleRouteDone);
      router.events.off("routeChangeError", handleRouteDone);
    };
  });

  const client = new QueryClient();

  return (
    <>
      <GlobalStyles />
      <QueryClientProvider client={client}>
        <Context>
          <Layout {...{ pageProps, Component }}>
            <Component {...pageProps} />
          </Layout>
        </Context>
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
