//css 를 위한 styles

import styled from "@emotion/styled";

export const MyButton = styled.button`
  background-color: ${(props) => (props.zzz === true ? "yellow" : "gray")};
  //함수가 없어서 함수를 만들어버림

  //true 면 버튼이 빨간색
  //false 면 버튼이 노란색
`;

export const Title = styled.h1`
  color: ${(props) => (props.qqq === true ? "red" : "yellow")};
`;
