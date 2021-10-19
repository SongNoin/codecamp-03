import { useRouter } from "next/router";

import styled from "@emotion/styled";
import Banner from "./banner/banner.container";
import Header from "./header/header.container";
import Sidebar from "./side/side.container";

const Wrapper = styled.div`
  margin: 0px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const LayoutWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Body = styled.div``;

const Footer = styled.div`
  height: 100px;
`;
const SideWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const Navi = styled.div`
  height: 35px;
  width: 100%;
  background-color: black;
`;

const HiddenBanner = ["/signup"];
const HiddenSide = ["/mypage/mymarket"];

export default function Layout(props: any) {
  const router = useRouter();
  const isHiddenBanner = HiddenBanner.includes(router.pathname);
  const isHiddenSide = !HiddenSide.includes(router.pathname);

  return (
    <Wrapper>
      <LayoutWrapper>
        <Navi />
        <Header />
        {!isHiddenBanner && <Banner />}
        <SideWrapper>
          {!isHiddenSide && <Sidebar />}
          <Body>{props.children}</Body>
        </SideWrapper>
        {isHiddenSide && <Footer />}
      </LayoutWrapper>
    </Wrapper>
  );
}
