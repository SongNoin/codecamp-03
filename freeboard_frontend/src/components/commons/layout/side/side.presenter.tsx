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
          <UserPhoto
            src={`https://storage.googleapis.com/${props.data?.fetchUserLoggedIn.picture}`}
          />
          <UserName>{props.data?.fetchUserLoggedIn.name}</UserName>
          <UserPoint>
            보유포인트 :{"  "}
            {props.data?.fetchUserLoggedIn.userPoint.amount.toLocaleString(
              "ko-KR"
            )}
            송
          </UserPoint>
        </UserInfoWRapper>
        <MenuWrapper>
          <MenuMarket
            onClick={props.onClcikMoveToMyMarket}
            market={props.market}
          >
            📦 내 장터
          </MenuMarket>
          <MenuPoint onClick={props.onClickMoveToMyPoint} point={props.point}>
            💸 내 포인트
          </MenuPoint>
          <MenuProfile
            onClick={props.onClickMoveToMyProfile}
            profile={props.profile}
          >
            🧔 내 프로필
          </MenuProfile>
        </MenuWrapper>
      </Wrapper>
    </>
  );
}
