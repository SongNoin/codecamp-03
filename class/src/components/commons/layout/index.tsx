import styled from "@emotion/styled";
import { useRouter } from "next/router";
import LayoutFooter from "./footer/LayoutFooter.container";
import LayoutHeader from "./header/LayoutHeader.container";
import LayoutNavi from "./navi/LayoutNavi.container";
import LayoutBanner from "./banner/LayoutBanner.container";

const Wrapper = styled.div``;

// const Header = styled.div`
//   height: 200px;
//   background-color: red;
// `;

const Body = styled.div``;

// const Footer = styled.div`
//   background-color: blue;
//   height: 300px;
// `;

const SidebarWrapper = styled.div`
  display: flex;
`;

const Sidebar = styled.div`
  width: 600px;
  height: 700px;
  background-color: skyblue;
`;

const HIDDEN_FOOTER = ["/13-01-layout-hidden"];

export default function Layout(props) {
  const router = useRouter();
  const isHiddenFooter = HIDDEN_FOOTER.includes(router.pathname);

  return (
    <Wrapper>
      {/* <Header>여기는 헤더 영역입니다.</Header> */}
      <LayoutHeader />
      <LayoutBanner />
      <LayoutNavi />
      <SidebarWrapper>
        <Sidebar>여기는 사이드바 영역입니다.</Sidebar>
        <Body>{props.children}</Body>
      </SidebarWrapper>
      {!isHiddenFooter && <LayoutFooter />}
      {/* <Footer>여기는 푸터 영역입니다.</Footer> */}
    </Wrapper>
  );
}
