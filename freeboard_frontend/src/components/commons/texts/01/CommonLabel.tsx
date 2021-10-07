import styled from "@emotion/styled";

const MyText = styled.div`
  font-family: Noto Sans CJK KR;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 16px;
  color: #000000;
`;

export default function CommonLabel(props) {
  return <MyText>{props.name}</MyText>;
}
