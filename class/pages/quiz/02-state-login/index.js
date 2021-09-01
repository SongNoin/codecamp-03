import {
  Wrapper,
  Logo,
  BrandPhoto,
  BrandName,
  LoginArea,
  Id,
  Password,
  Login,
  LoginButton,
  LoginInfo,
  RegisterButton,
  KakaoLogin,
  KakaoLoginButton,
} from "../../../styles/state-login";
export default function stateLogIn() {
  return (
    <Wrapper>
      <Logo>
        <BrandPhoto>
          <img src="/images/logo.png" />
        </BrandPhoto>
        <BrandName>잇츠로드</BrandName>
      </Logo>
      <LoginArea>
        <Id name="id" type="text" placeholder="이메일을 입력해 주세요." />
        <Password
          name="password"
          type="password"
          placeholder="비밀번호를 확인해 주세요"
        />
      </LoginArea>
      <Login>
        <LoginButton>로그인</LoginButton>
      </Login>
      <LoginInfo>
        <RegisterButton>이메일 찾기</RegisterButton>
        <RegisterButton>비밀번호 찾기</RegisterButton>
        <RegisterButton>회원가입</RegisterButton>
      </LoginInfo>
      <KakaoLogin>
        <KakaoLoginButton>카카오톡으로 로그인</KakaoLoginButton>
      </KakaoLogin>
    </Wrapper>
  );
}
