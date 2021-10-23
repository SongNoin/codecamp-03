import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.div`
  margin-top: 40px;
  font-style: "normal";
  font-family: Noto Sans CJK KR;

  font-size: 40px;
  text-align: center;
  font-weight: bold;
  line-height: 27px;

  color: black;
  text-shadow: 2px 2px #f7c6ff;

  cursor: pointer;
`;

export const PointAmount = styled.div`
  font-family: Noto Sans CJK KR;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 36px;
  color: #000000;

  margin-top: 40px;
`;

export const Input = styled.input`
  font-family: Noto Sans CJK KR;

  width: 300px;
  height: 52px;
  background: #f2f2f2;
  border: none;

  margin-top: 20px;
  margin-bottom: 50px;
  padding-left: 20px;
`;
