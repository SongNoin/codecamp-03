import styled from "@emotion/styled";
const MyText = styled.div`
  font-family: Noto Sans CJK KR;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  margin-top: 10px;
  color: #cd5c5c;
`;

export default function ErrorText(props) {
  return <MyText>{props.name}</MyText>;
}
