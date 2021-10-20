import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1380px;
  padding-top: 94px;
  padding-right: 360px;
  padding-left: 40px;
`;
export const MenuWrapper = styled.div`
  width: 500px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const Total = styled.div`
  font-family: Noto Sans CJK KR;
  font-style: normal;
  font-weight: ${(props) => (props.total === true ? 800 : "normal")};
  font-size: ${(props) => (props.total === true ? "25px" : "18px")};
  line-height: 24px;
  color: ${(props) => (props.total === true ? "#00bfa5" : "#4f4f4f")};
  cursor: pointer;
`;
export const Charge = styled.div`
  font-family: Noto Sans CJK KR;
  font-style: normal;
  font-weight: ${(props) => (props.charge === true ? 800 : "normal")};
  font-size: ${(props) => (props.charge === true ? "25px" : "18px")};
  line-height: 24px;
  color: ${(props) => (props.charge === true ? "#00bfa5" : "#4f4f4f")};
  cursor: pointer;
`;
export const Buy = styled.div`
  font-family: Noto Sans CJK KR;
  font-style: normal;
  font-weight: ${(props) => (props.buy === true ? 800 : "normal")};
  font-size: ${(props) => (props.buy === true ? "25px" : "18px")};
  line-height: 24px;
  color: ${(props) => (props.buy === true ? "#00bfa5" : "#4f4f4f")};
  cursor: pointer;
`;
export const Sell = styled.div`
  font-family: Noto Sans CJK KR;
  font-style: normal;
  font-weight: ${(props) => (props.sell === true ? 800 : "normal")};
  font-size: ${(props) => (props.sell === true ? "25px" : "18px")};
  line-height: 24px;
  color: ${(props) => (props.sell === true ? "#00bfa5" : "#4f4f4f")};
  cursor: pointer;
`;
