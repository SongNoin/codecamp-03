import { useQuery } from "@apollo/client";
import CommonButton from "../../../commons/buttons/01/CommonButton";
import { FETCH_USER_LOGGEDIN } from "../../../commons/layout/side/side.queries";
import Upload03 from "../../../commons/uploads/03/upload03.container";
import {
  Wrapper,
  Title,
  InputWrapper,
  Label,
  Input,
  ButtonWrapper,
  NameWrapper,
  UploadWrapper,
} from "./myprofile.styles";

export default function MyProfileUI(props) {
  const { data } = useQuery(FETCH_USER_LOGGEDIN);
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
        <NameWrapper>
          <Title>내 이름 변경</Title>
          <InputWrapper>
            <Label>변경 할 이름</Label>
            <Input type="text" onChange={props.onChangeName} />
          </InputWrapper>
          <ButtonWrapper>
            <CommonButton
              name="이름 변경하기"
              onClick={props.onClickUpdateUserName}
            />
          </ButtonWrapper>
        </NameWrapper>
        <NameWrapper>
          <Title>내 사진 변경</Title>
          <UploadWrapper>
            <Label>변경 할 사진</Label>
            <Upload03
              onChangeFile={props.onChangeFile}
              defaultPicture={data?.fetchUserLoggedIn.picture}
            />
          </UploadWrapper>
          <ButtonWrapper>
            <CommonButton
              name="사진 변경하기"
              onClick={props.onClickUpdateUserPicture}
            />
          </ButtonWrapper>
        </NameWrapper>
      </Wrapper>
    </>
  );
}
