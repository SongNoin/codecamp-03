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

const Footer = styled.div`
  height: 100px;
`;

const Navi = styled.div`
  height: 35px;
  background-color: black;
`;

export default function Layout(props) {
  return (
    <Wrapper>
      <LayoutWrapper>
        <Navi />
        <Header />
        {/* <SidebarWrapper> */}
        {/* <Sidebar /> */}
        {/* <BannerWrapper> */}
        <Banner />
        <Body>{props.children}</Body>
        {/* </BannerWrapper> */}
        {/* </SidebarWrapper> */}
        <Footer />
      </LayoutWrapper>
    </Wrapper>
  );
}
