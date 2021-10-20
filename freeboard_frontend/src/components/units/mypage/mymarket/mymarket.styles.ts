import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1380px;
  padding-top: 56px;
  padding-right: 360px;
  padding-left: 40px;
`;

export const WrapperHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const ProductMenu = styled.div`
  font-family: Noto Sans CJK KR;
  font-style: normal;
  font-weight: ${(props) => (props.isPickList === true ? "normal" : 800)};
  font-size: ${(props) => (props.isPickList === true ? "18px" : "25px")};
  line-height: 24px;
  margin-right: 25px;
  color: ${(props) => (props.isPickList === true ? "#4f4f4f" : "#00bfa5")};
  cursor: pointer;
`;

export const PickMenu = styled.div`
  font-family: Noto Sans CJK KR;
  font-style: normal;
  font-weight: ${(props) => (props.isPickList === true ? 800 : "normal")};
  font-size: ${(props) => (props.isPickList === true ? "25px" : "18px")};
  line-height: 24px;
  color: ${(props) => (props.isPickList === true ? "#00bfa5" : "#4f4f4f")};
  cursor: pointer;
`;

export const MenuWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`;

export const RowName = styled.div`
  height: 52px;
  display: flex;
  flex-direction: row;
  text-align: center;
  border-top: 1px solid #bdbdbd;
  align-items: center;
  margin-top: 16px;

  font-family: Noto Sans CJK KR;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
`;

export const ColumnName = styled.div`
  width: 10%;
`;

export const Row = styled.div`
  height: 52px;

  display: flex;
  flex-direction: row;
  align-items: center;

  text-align: center;
  border-top: 1px solid #bdbdbd;
  font-family: Noto Sans CJK KR;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #4f4f4f;
`;
export const Column = styled.div`
  width: 10%;
`;

export const ColumnSoldOut = styled.div`
  width: 20%;
  font-family: Noto Sans CJK KR;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #00bfa5;
`;

export const ColumnTitle = styled.div`
  width: 50%;
`;

export const PickColumnTitle = styled.div`
  width: 40%;
`;
export const SearchWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
export const SearchInput = styled.input`
  width: 368px;
  height: 52px;
  background: #f2f2f2;
  margin-right: 24px;
  border: none;
`;
export const WrapperBody = styled.div`
  display: flex;
  flex-direction: column;
`;
