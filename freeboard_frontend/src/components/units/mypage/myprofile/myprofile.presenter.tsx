import CommonButton from "../../../commons/buttons/01/CommonButton";
import {
  Wrapper,
  Title,
  InputWrapper,
  Label,
  Input,
  ButtonWrapper,
} from "./myprofile.styles";

export default function MyProfileUI(props) {
  return (
    <>
      <Wrapper>
        <Title>비밀번호 변경</Title>
        <InputWrapper>
          <Label>현재 비밀번호</Label>
          <Input type="password" />
        </InputWrapper>
        <InputWrapper>
          <Label>새 비밀번호</Label>
          <Input type="password" onChange={props.onChangePassword} />
        </InputWrapper>
        <InputWrapper>
          <Label>새 비밀번호 확인</Label>
          <Input type="password" onChange={props.onChangeCheckPassword} />
        </InputWrapper>
        <ButtonWrapper>
          <CommonButton
            name="비밀번호 변경하기"
            onClick={props.onClickResetPassword}
          />
        </ButtonWrapper>
      </Wrapper>
    </>
  );
}
