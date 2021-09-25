import {
  Wrapper,
  TitleWrapper,
  Title,
  MenuWrapper,
  Menu,
  MyWrapper,
  My,
} from "./header.styles";

export default function HeaderUI(props) {
  return (
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
        <My src="/images/login.png"></My>
        <My src="/images/my.png"></My>
        <My src="/images/signup.png"></My>
      </MyWrapper>
    </Wrapper>
  );
}
