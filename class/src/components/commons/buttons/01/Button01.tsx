import styled from "@emotion/styled";

interface IProps {
  isValid: boolean;
}

const MyButton = styled.button`
  background-color: ${(props: IProps) => (props.isValid ? "yellow" : "green")};
`;

export default function Button01(props) {
  return (
    <MyButton type={props.type} isValid={props.isValid}>
      {props.name}
    </MyButton>
    // onClick 등 함수등도 props를 통해 연결해야한다
  );
}
