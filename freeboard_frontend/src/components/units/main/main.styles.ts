import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/styles/media";

export const Wrapper = styled.div`
  width: 100%;
  height: 902px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export const WrapperLeft = styled.div`
  width: 33%;
  border-right: 1px solid #f2f2f2;
`;

export const LogoWrapper = styled.div`
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.div`
  font-family: LogoFont;
  font-style: "normal";
  font-size: 200px;
  text-align: center;
  font-weight: bold;
  line-height: 27px;

  color: black;
  text-shadow: 6px 6px #00bfa5;
`;

export const LeftPhotoWrapper = styled.div`
  height: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  background-image: linear-gradient(
    to right,
    #e0eafc 0%,
    black 60%,
    #e0eafc 100%
  );

  /* padding: 15px 45px; */
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: black;
  box-shadow: 0 0 20px #eee;
  border: none;
  :hover {
    background-position: right center; /* change the direction of the change here */
    color: black;
    text-decoration: none;
  }
`;
export const LeftPhoto = styled.img`
  height: 70%;
`;
export const WrapperCenter = styled.div`
  width: 34%;
  border-right: 1px solid #f2f2f2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MenuWrapper = styled.div`
  display: flex;
  flex-direction: row;

  margin-top: 30px;
  margin-bottom: 50px;
`;
export const Menu = styled.div`
  font-style: "normal";
  font-family: LogoFont;

  font-size: 50px;
  text-align: center;
  font-weight: bold;
  line-height: 27px;

  color: black;
  text-shadow: 2px 2px #f7c6ff;
  margin-left: 20px;
  :hover {
    font-size: 60px;
  }
  cursor: pointer;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Icon = styled.div`
  font-size: 50px;
`;
export const Title = styled.div`
  font-style: "normal";
  font-family: LogoFont;

  font-size: 30px;
  text-align: center;
  font-weight: bold;
  line-height: 27px;

  color: black;
  text-shadow: 2px 2px #00bfa5;

  margin-top: 50px;
  margin-bottom: 20px;
`;
export const Info = styled.div`
  font-family: Noto Sans CJK KR;
  font-style: normal;
  font-weight: 500;
  font-size: 9px;
  line-height: 27px;
`;

export const WrapperRight = styled.div`
  width: 33%;
  background-image: linear-gradient(
    to right,
    #e0eafc 0%,
    black 60%,
    #e0eafc 100%
  );

  /* padding: 15px 45px; */
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: black;
  display: block;
  border: none;
  :hover {
    background-position: right center; /* change the direction of the change here */
    color: black;
    text-decoration: none;
  }
`;
export const IntroWrapper = styled.div`
  height: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Intro = styled.div`
  /* font-family: Noto Sans CJK KR;
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 27px;
  margin-top: 30px; */
  font-style: "normal";
  font-family: LogoFont;

  font-size: 50px;
  text-align: center;
  font-weight: bold;
  line-height: 27px;
  color: black;
  text-shadow: 2px 2px #ffe87b;
  margin-bottom: 15px;
`;

export const RightPhotoWapper = styled.div`
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const RightPhoto = styled.img`
  height: 80%;
`;

export const MobileWrapper = styled.div`
  @media ${breakPoints.desktop} {
    display: none;
  }
  margin-top: 100px;
`;
export const Line = styled.hr`
  border: 1px solid #f2f2f2;
  margin-top: 100px;
`;
export const MobileLogo = styled.div`
  font-family: LogoFont;
  font-style: "normal";
  font-size: 100px;
  text-align: center;
  font-weight: bold;
  line-height: 27px;
  color: black;
  text-shadow: 3px 3px #00bfa5;
`;
export const MobileMenuWrapper = styled.div`
  @media ${breakPoints.desktop} {
    display: none;
  }
  display: flex;
  justify-content: center;
  margin-top: 100px;
  margin-bottom: 150px;
`;
export const MobileMenu = styled.div`
  font-style: "normal";
  font-family: LogoFont;

  font-size: 40px;
  text-align: center;
  font-weight: bold;
  line-height: 27px;

  color: black;
  text-shadow: 2px 2px #f7c6ff;
  margin-left: 20px;
  :hover {
    font-size: 50px;
  }
  cursor: pointer;
`;
