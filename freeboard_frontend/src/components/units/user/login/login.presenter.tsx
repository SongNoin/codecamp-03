import BigCommonButton from "../../../commons/buttons/03/BigCommonButton";
import {
  Wrapper,
  LogoWrapper,
  Logo,
  Title,
  TextWrapper,
  Line,
  Info,
  StayWraaper,
  StayLogin,
  StayLoginText,
  MenuWrapper,
  Menu,
  MenuLine,
} from "./login.styles";

export default function LoginUI(props) {
  return (
    <>
      <Wrapper>
        <LogoWrapper>
          <Logo>SONGNY</Logo>
        </LogoWrapper>
        <Title>로그인하기</Title>
        <TextWrapper>
          <Info
            type="text"
            placeholder="이메일"
            onChange={props.onChangeEmail}
          />
          <Info
            type="password"
            placeholder="비밀번호"
            onChange={props.onChangePassword}
          />
          <StayWraaper>
            <StayLogin type="checkbox" />
            <StayLoginText>로그인 상태 유지하기</StayLoginText>
          </StayWraaper>
          <BigCommonButton name="로그인하기" onClick={props.onClickLogin} />
        </TextWrapper>
        <Line />
        <MenuWrapper>
          <Menu>이메일 찾기</Menu>
          <MenuLine>|</MenuLine>
          <Menu> 비밀번호 찾기</Menu>
          <MenuLine>|</MenuLine>
          <Menu>회원가입</Menu>
        </MenuWrapper>
      </Wrapper>
    </>
  );
}
