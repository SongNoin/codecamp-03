import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/styles/media";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

// export const TitleWrapper = styled.div`
//   width: 100%;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
// `;

export const MainTitle = styled.img`
  width: 70%;
  :hover {
    width: 100%;
    /* background-color: red; */
  }
  @media ${breakPoints.tablet} {
    // 화면이 1199px 이하로 작아진다면 아래의 css가 적용된다.
    width: 40%;
    // 넓이는 보통 핸드폰 사이즈가 다양하기 때문에 % 를 준다.
    // 높이는 같이 커졌다 작아졌다하기 애매하기 때문에 고정한다.
  }

  @media ${breakPoints.mobile} {
    // 화면이 767px 이하로 작아진다면 아래의 css가 적용된다.
    width: 10%;
    /* display: none; */ // 작아지면 안보이게끔 하게도 할수있다.
  }
`;

// export const Welcome = styled.img`
//   width: 50%;
// `;
