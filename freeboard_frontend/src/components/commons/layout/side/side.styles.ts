import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 538px;
  height: 1189px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 120px;

  border-right: 2px solid #f2f2f2;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const Title = styled.div`
  font-family: Noto Sans CJK KR;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 36px;
  margin-top: 80px;
  /* identical to box height */
`;
export const UserInfoWRapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 48px;
`;
export const UserPhoto = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
`;
export const UserName = styled.div`
  font-family: Noto Sans CJK KR;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 36px;
  margin-top: 28px;
`;
export const UserPoint = styled.div`
  font-family: Noto Sans CJK KR;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  margin-top: 10px;
  margin-bottom: 20px;
`;
export const PointCharge = styled.div`
  margin-top: 20px;
`;
export const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 69px;
`;
export const MenuMarket = styled.div<{ market: boolean }>`
  font-family: Noto Sans CJK KR;
  font-style: normal;
  font-weight: ${(props) => (props.market === true ? 800 : "normal")};
  font-size: ${(props) => (props.market === true ? "40px" : "25px")};
  line-height: 27px;
  margin-top: 50px;
  cursor: pointer;
  color: ${(props) => (props.market === true ? "#00bfa5" : "#4f4f4f")};
`;
export const MenuPoint = styled.div<{ point: boolean }>`
  font-family: Noto Sans CJK KR;
  font-style: normal;
  font-weight: ${(props) => (props.point === true ? 800 : "normal")};
  font-size: ${(props) => (props.point === true ? "40px" : "25px")};
  line-height: 27px;
  margin-top: 80px;

  cursor: pointer;
  color: ${(props) => (props.point === true ? "#00bfa5" : "#4f4f4f")};
`;
export const MenuProfile = styled.div<{ profile: boolean }>`
  font-family: Noto Sans CJK KR;
  font-style: normal;
  font-weight: ${(props) => (props.profile === true ? 800 : "normal")};
  font-size: ${(props) => (props.profile === true ? "40px" : "25px")};
  line-height: 27px;
  margin-top: 80px;
  cursor: pointer;
  color: ${(props) => (props.profile === true ? "#00bfa5" : "#4f4f4f")};
`;
