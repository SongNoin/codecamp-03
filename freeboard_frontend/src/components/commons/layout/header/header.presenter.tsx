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
import Point from "../../../units/user/point/point.container";

export default function HeaderUI(props: any) {
  return (
    <>
      <Wrapper>
        <TitleWrapper>
          <Title src="/images/songny2.png" onClick={props.onClickMain}></Title>
          <MenuWrapper>
            <Menu src="/images/board.png" onClick={props.onClickList}></Menu>
            <Menu
              src="/images/market.png"
              onClick={props.onClickMoveToMarket}
            ></Menu>
            <Menu src="/images/games.png" onClick={props.onClickGames}></Menu>
          </MenuWrapper>
        </TitleWrapper>
        <MyWrapper>
          {props.accessToken && (
            <My src="/images/user.png" onClick={props.onToglePoint} />
          )}
          {props.isPointOpen && (
            <Modal visible={true} onCancel={props.onToglePoint}>
              <Point />
            </Modal>
          )}
          {!props.accessToken && (
            <My src="/images/login.png" onClick={props.onTogleLogin}></My>
          )}
          {props.isLoginOpen && (
            <Modal visible={true} onCancel={props.onTogleLogin}>
              <LoginPage />
            </Modal>
          )}
          <My src="/images/my.png" onClick={props.onClickMoveToMyPage}></My>
          {!props.accessToken && (
            <My
              src="/images/signup.png"
              onClick={props.onClickMoveToSignUp}
            ></My>
          )}
        </MyWrapper>
      </Wrapper>
      <hr />
    </>
  );
}
