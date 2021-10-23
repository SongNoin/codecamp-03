import {
  Wrapper,
  TitleWrapper,
  Title,
  MenuWrapper,
  MyWrapper,
  MyPicture,
  MenuTitle,
  MyTitle,
} from "./header.styles";
import LoginPage from "../../../../../pages/login";
import { Modal } from "antd";

export default function HeaderUI(props: any) {
  return (
    <>
      <Wrapper>
        <TitleWrapper>
          <Title onClick={props.onClickMain}>SONGNY</Title>
          <MenuWrapper>
            <MenuTitle onClick={props.onClickList}>BOARD</MenuTitle>
            <MenuTitle onClick={props.onClickMoveToMarket}>MARKET</MenuTitle>
            <MenuTitle onClick={props.onClickGames}>GAMES</MenuTitle>
          </MenuWrapper>
        </TitleWrapper>
        <MyWrapper>
          {props.accessToken && (
            <>
              <MyPicture
                src={`https://storage.googleapis.com/${props.data?.fetchUserLoggedIn.picture}`}
                onClick={props.onClickMoveToMyPage}
              />
              <MyTitle onClick={props.onClickLogout}>LOGOUT</MyTitle>
            </>
          )}
          {!props.accessToken && (
            <MyTitle onClick={props.onTogleLogin}>LOGIN</MyTitle>
          )}
          {props.isLoginOpen && (
            <Modal
              visible={true}
              onCancel={props.onTogleLogin}
              cancelButtonProps={{ style: { display: "none" } }}
              okButtonProps={{ style: { display: "none" } }}
            >
              <LoginPage />
            </Modal>
          )}
          {!props.accessToken && (
            <MyTitle onClick={props.onClickMoveToSignUp}>SIGNUP</MyTitle>
          )}
        </MyWrapper>
      </Wrapper>
      <hr />
    </>
  );
}
