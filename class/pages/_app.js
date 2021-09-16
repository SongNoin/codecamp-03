// 세팅, 설정 파일
// import "../styles/globals.css";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "antd/dist/antd.css";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client"; //apollo 세팅

import Layout from "../src/components/commons/layout/";
function MyApp({ Component, pageProps }) {
  const client = new ApolloClient({
    uri: "http://example.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache(),
  });

  return (
    <>
      {/* <Global styles={globalStyles} /> */}
      <ApolloProvider client={client}>
        {/* <Layout> */}
        <Component {...pageProps} />
        {/* </Layout> */}
      </ApolloProvider>
    </>
  );
}
export default MyApp;
