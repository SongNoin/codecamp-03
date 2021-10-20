import styled from "@emotion/styled";
import { breakPoints } from "../../src/commons/styles/media";

const Wrapper = styled.div`
  width: 1000px;
  height: 1000px;
  background-color: #cd5c5c;

  //* 미디어 쿼리

  @media ${breakPoints.tablet} {
    // 화면이 1199px 이하로 작아진다면 아래의 css가 적용된다.
    width: 500px;
    // 넓이는 보통 핸드폰 사이즈가 다양하기 때문에 % 를 준다.
    height: 500px;
    // 높이는 같이 커졌다 작아졌다하기 애매하기 때문에 고정한다.
    background-color: #4444c5;
  }

  @media ${breakPoints.mobile} {
    // 화면이 767px 이하로 작아진다면 아래의 css가 적용된다.
    width: 100px;
    height: 100px;
    background-color: #81d8b1;
    /* display: none; */ // 작아지면 안보이게끔 하게도 할수있다.
  }
`;

export default function ResponsiveMediaPage() {
  return (
    <>
      <Wrapper>상자</Wrapper>
    </>
  );
}
