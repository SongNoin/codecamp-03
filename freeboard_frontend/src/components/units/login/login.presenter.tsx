import React, { Component } from "react";
import {
  Wrapper,
  Logo,
  Title,
  TextWrapper,
  Line,
  Info,
  StayWraaper,
  StayLogin,
  StayLoginText,
  LoginButton,
  MenuWrapper,
  Menu,
  MenuLine,
} from "./login.styles";

export default function LoginUI() {
  return (
    <>
      <Wrapper>
        <Logo src="/images/songny2.png" />
        <Title>로그인하기</Title>
        <TextWrapper>
          <Info type="text" placeholder="이메일" />
          <Info type="password" placeholder="비밀번호" />
          <StayWraaper>
            <StayLogin type="checkbox" />
            <StayLoginText>로그인 상태 유지하기</StayLoginText>
          </StayWraaper>
          <LoginButton>로그인하기</LoginButton>
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
