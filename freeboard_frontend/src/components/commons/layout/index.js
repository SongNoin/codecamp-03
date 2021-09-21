import styled from "@emotion/styled";
import Banner from "./banner/banner.container";
import Header from "./header/header.container";

// import Sidebar from "./side/side.container";

const Wrapper = styled.div`
  margin: 0px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

// const SidebarWrapper = styled.div`
//   display: flex;
// `;
const LayoutWrapper = styled.div``;

// const BannerWrapper = styled.div``;
const Body = styled.div``;

// const Footer = styled.div``;

export default function Layout(props) {
  return (
    <Wrapper>
      <LayoutWrapper>
        <Header />
        {/* <SidebarWrapper> */}
        {/* <Sidebar /> */}
        {/* <BannerWrapper> */}
        <Banner />
        {/* <Navi /> */}
        <Body>{props.children}</Body>
        {/* </BannerWrapper> */}
        {/* </SidebarWrapper> */}
        {/* <Footer /> */}
      </LayoutWrapper>
    </Wrapper>
  );
}
