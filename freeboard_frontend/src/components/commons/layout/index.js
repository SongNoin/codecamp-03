import styled from "@emotion/styled";
import Banner from "./banner/banner.container";
import Header from "./header/header.container";

import Sidebar from "./side/side.container";

const Wrapper = styled.div``;

const SidebarWrapper = styled.div`
  display: flex;
`;
const BannerWrapper = styled.div``;
const Body = styled.div``;

// const Footer = styled.div``;

export default function Layout(props) {
  return (
    <Wrapper>
      <Header />
      {/* <Navi /> */}
      <SidebarWrapper>
        <Sidebar />
        <BannerWrapper>
          <Banner />
          <Body>{props.children}</Body>
        </BannerWrapper>
      </SidebarWrapper>
      {/* <Footer /> */}
    </Wrapper>
  );
}
