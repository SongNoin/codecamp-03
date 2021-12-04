import {
  Wrapper,
  WrapperLeft,
  LogoWrapper,
  Logo,
  LeftPhotoWrapper,
  LeftPhoto,
  WrapperCenter,
  Icon,
  InfoWrapper,
  Title,
  Info,
  MenuWrapper,
  Menu,
  WrapperRight,
  Intro,
  IntroWrapper,
  RightPhotoWapper,
  RightPhoto,
  MobileWrapper,
  MobileLogo,
  Line,
  MobileMenu,
  MobileMenuWrapper,
} from "./main.styles";

export default function MainUI(props) {
  return (
    <>
      <Wrapper>
        <WrapperLeft>
          <LogoWrapper>
            <Logo>SONGNY</Logo>
          </LogoWrapper>
          <LeftPhotoWrapper>
            <LeftPhoto src={"/images/main/blackops.jpg"} />
          </LeftPhotoWrapper>
        </WrapperLeft>
        <WrapperCenter>
          <InfoWrapper>
            <Icon>🎮</Icon>
            <MenuWrapper>
              <Menu onClick={props.onClickMoveToBoard}>BOARD</Menu>
              <Menu onClick={props.onClickMoveToMarket}>MARKET</Menu>
              <Menu onClick={props.onClickMoveToSignUp}>SIGNUP</Menu>
            </MenuWrapper>
          </InfoWrapper>
          <InfoWrapper>
            <Title>Info</Title>
            <Info>Email : as5427072@gmail.com</Info>
            <Info>Git : github.com/SongNoin</Info>
            <Info>Blog : velog.io/@as5427072</Info>
          </InfoWrapper>
        </WrapperCenter>
        <WrapperRight>
          <RightPhotoWapper>
            <RightPhoto src={"images/main/cratos2.jpg"} />
          </RightPhotoWapper>
          <IntroWrapper>
            <Intro>Play Has No Limits</Intro>
            <Intro>Play Has No Limits</Intro>
          </IntroWrapper>
        </WrapperRight>
      </Wrapper>
      <MobileWrapper>
        <MobileLogo>SONGNY</MobileLogo>
        <Line />
        <MobileMenuWrapper>
          <MobileMenu onClick={props.onClickMoveToBoard}>BOARD</MobileMenu>
          <MobileMenu onClick={props.onClickMoveToMarket}>MARKET</MobileMenu>
          <MobileMenu onClick={props.onClickMoveToSignUp}>SIGNUP</MobileMenu>
        </MobileMenuWrapper>
        <InfoWrapper>
          <Title>Info</Title>
          <Info>Email : as5427072@gmail.com</Info>
          <Info>Git : github.com/SongNoin</Info>
          <Info>Blog : velog.io/@as5427072</Info>
        </InfoWrapper>
      </MobileWrapper>
    </>
  );
}
