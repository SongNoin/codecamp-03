import styled from "@emotion/styled";

const Wrapper = styled.div``;
const Header = styled.div``;
const Banner = styled.div``;
const Navi = styled.div``;
const SidebarWrapper = styled.div``;
const Sidebar = styled.div``;

const Body = styled.div``;

const Footer = styled.div``;

export default function Layout(props) {
  return (
    <Wrapper>
      <Header />
      <Banner />
      <Navi />
      <SidebarWrapper>
        <Sidebar />
        <Body>{props.children}</Body>
      </SidebarWrapper>
      <Footer />
    </Wrapper>
  );
}
