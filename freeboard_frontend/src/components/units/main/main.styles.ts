import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/styles/media";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  /* align-items: center; */
`;

// export const TitleWrapper = styled.div`
//   width: 100%;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
// `;

export const MainTitle = styled.img`
  width: 100%;
  @media ${breakPoints.tablet} {
    width: 50%;
  }

  @media ${breakPoints.mobile} {
    width: 35%;
  }
`;

// export const Welcome = styled.img`
//   width: 50%;
// `;
