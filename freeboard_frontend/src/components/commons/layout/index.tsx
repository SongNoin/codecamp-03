import React, { Component } from "react";
import { useRouter } from "next/router";

import styled from "@emotion/styled";
import Banner from "./banner/banner.container";
import Header from "./header/header.container";

const Wrapper = styled.div`
  margin: 0px;
  width: 1920px;
  display: flex;
  justify-content: center;
`;

const LayoutWrapper = styled.div`
  width: 100%;
`;

const Body = styled.div``;

const Footer = styled.div`
  height: 100px;
`;

const Navi = styled.div`
  height: 35px;
  background-color: black;
`;

const HiddenBanner = ["/signup"];

export default function Layout(props: any) {
  const router = useRouter();
  const isHiddenBanner = HiddenBanner.includes(router.pathname);

  return (
    <Wrapper>
      <LayoutWrapper>
        <Navi />
        <Header />
        {!isHiddenBanner && <Banner />}
        <Body>{props.children}</Body>
        <Footer />
      </LayoutWrapper>
    </Wrapper>
  );
}
