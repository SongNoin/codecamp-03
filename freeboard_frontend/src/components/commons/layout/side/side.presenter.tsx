import {
  Wrapper,
  TitleWrapper,
  Title,
  UserInfoWRapper,
  UserPhoto,
  UserName,
  UserPoint,
  MenuWrapper,
  MenuMarket,
  MenuPoint,
  MenuProfile,
} from "./side.styles";

export default function SideBarUI(props) {
  return (
    <>
      <Wrapper>
        <TitleWrapper>
          <Title>MY PAGE</Title>
        </TitleWrapper>
        <UserInfoWRapper>
          <UserPhoto src={"/images/photo.png"} />
          <UserName>{props.data?.fetchUserLoggedIn.name}</UserName>
          <UserPoint>
            {props.data?.fetchUserLoggedIn.userPoint.amount} 송
          </UserPoint>
        </UserInfoWRapper>
        <MenuWrapper>
          <MenuMarket onClick={props.onClcikMoveToMyMarket}>내 장터</MenuMarket>
          <MenuPoint onClick={props.onClickMoveToMyPoint}>내 포인트</MenuPoint>
          <MenuProfile onClick={props.onClickMoveToMyProfile}>
            내 프로필
          </MenuProfile>
        </MenuWrapper>
      </Wrapper>
    </>
  );
}
