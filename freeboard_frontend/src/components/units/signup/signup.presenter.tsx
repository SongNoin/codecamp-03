import React, { Component } from "react";

import {
  Wrapper,
  PhotoWrapper,
  PhotoLine,
  Photo,
  SignUpWrapper,
  TitleWrapper,
  Title,
  SubTitle,
  Logo,
  TextWrapper,
  Info,
  SignUpButton,
} from "./signup.styels";

export default function SignUpUI() {
  return (
    <>
      <Wrapper>
        <PhotoWrapper>
          <PhotoLine>
            <Photo src="images/signup/sofa.jpg" />
            <Photo src="images/signup/ps5cross.jpg" />

            <Photo src="images/signup/women.jpeg" />
          </PhotoLine>
          <PhotoLine>
            <Photo src="images/signup/pizza.jpg" />
            <Photo src="images/signup/ps5rounge.jpg" />
            <Photo src="images/signup/older.jpg" />
          </PhotoLine>
        </PhotoWrapper>
        <SignUpWrapper>
          <TitleWrapper>
            <Title>회원가입</Title>
            <SubTitle>
              <Logo>SONGNY </Logo> 에 오신걸 환영합니다!
            </SubTitle>
          </TitleWrapper>
          <TextWrapper>
            <Info type="text" placeholder="이메일" />
            <Info type="text" placeholder="이름" />
            <Info type="password" placeholder="비밀번호" />
            <Info type="password" placeholder="비밀번호확인" />
            <SignUpButton>회원가입하기</SignUpButton>
          </TextWrapper>
        </SignUpWrapper>
      </Wrapper>
    </>
  );
}
