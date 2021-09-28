// 세팅, 설정 파일
// import "../styles/globals.css";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "antd/dist/antd.css";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  ApolloLink,
} from "@apollo/client"; // apollo 세팅

import Layout from "../src/components/commons/layout/";
import { initializeApp } from "firebase/app";

import { createUploadLink } from "apollo-upload-client";

export const firebaseApp = initializeApp({
  apiKey: "AIzaSyAfov2zzOKvEz1I4hgOqu-Pn_nvxVugY5Y",
  authDomain: "codecamp-03.firebaseapp.com",
  projectId: "codecamp-03",
  storageBucket: "codecamp-03.appspot.com",
  messagingSenderId: "918360583688",
  appId: "1:918360583688:web:9d1749c7130757ead02bbd",
  measurementId: "G-ZJNJYG4YB6",
});

function MyApp({ Component, pageProps }) {
  const uploadLink = createUploadLink({
    uri: "http://backend02.codebootcamp.co.kr/graphql",
  });

  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink]),
    cache: new InMemoryCache(),
  });

  return (
    <>
      <Global styles={globalStyles} />
      <ApolloProvider client={client}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </>
  );
}
export default MyApp;
