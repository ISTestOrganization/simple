import type { AppProps } from "next/app";
import React from "react";

interface AllProps extends AppProps {
  test: any;
  nextPublicTest: any;
  newTest: any;
}

function MyApp({ Component, pageProps, ...rest }: AllProps) {
  return (
    <React.Fragment>
      <div>
        <h3>TEST</h3>
        <div>props: {rest.test}</div>
        <div>client: {process.env.TEST}</div>
      </div>
      <div>
        <h3>NEXT_PUBLIC_TEST</h3>
        <div>props: {rest.nextPublicTest}</div>
        <div>client: {process.env.NEXT_PUBLIC_TEST}</div>
      </div>
      <div>
        <h3>NEW_TEST</h3>
        <div>props: {rest.newTest}</div>
        <div>client: {process.env.NEW_TEST}</div>
      </div>
    </React.Fragment>
  );
}

MyApp.getInitialProps = async (ctx: any) => {
  return {
    test: process.env.TEST,
    nextPublicTest: process.env.NEXT_PUBLIC_TEST,
    newTest: process.env.NEW_TEST,
  };
};
export default MyApp;
