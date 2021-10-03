import React, { Component } from "react";
import { Modal } from "antd";
import {
  Wrapper,
  TitleWrapper,
  Title,
  MenuWrapper,
  Menu,
  MyWrapper,
  My,
} from "./header.styles";
import LoginPage from "../../../../../pages/login";

export default function HeaderUI(props: any) {
  return (
    <>
      <Wrapper>
        <TitleWrapper>
          <Title src="/images/songny2.png" onClick={props.onClickMain}></Title>
          <MenuWrapper>
            <Menu src="/images/board.png" onClick={props.onClickList}></Menu>
            <Menu src="/images/market.png"></Menu>
            <Menu src="/images/games.png" onClick={props.onClickGames}></Menu>
          </MenuWrapper>
        </TitleWrapper>
        <MyWrapper>
          <My src="/images/login.png" onClick={props.onTogleLogin}></My>
          {props.isOpen && (
            <Modal visible={true} onCancel={props.onTogleLogin}>
              <LoginPage />
            </Modal>
          )}
          <My src="/images/my.png"></My>
          <My src="/images/signup.png" onClick={props.onClickMoveToSignUp}></My>
        </MyWrapper>
      </Wrapper>
      <hr />
    </>
  );
}
