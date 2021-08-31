import { useState } from "react";

import {
  Wrapper,
  Title,
  WriterWrapper,
  TextWrapper,
  Label,
  Writer,
  Password,
  Subject,
  Contents,
  AddressWrapper,
  AddressNumber,
  SearchButton,
  Address,
  Youtube,
  PhotoWrapper,
  UploadButton,
  OptionWrapper,
  OptionRadio,
  RadioLabel,
  ButtonWrapper,
  CancelButton,
  SubmitButton,
  Error,
} from "../../../styles/boards";

export default function BoardsNewPage() {
  const [writer, setWriter] = useState("");
  const [writerError, setWriterError] = useState("");

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [title, setTitle] = useState("");
  const [titleError, setTitleError] = useState("");

  const [contents, setContents] = useState("");
  const [contentsError, setContentsError] = useState("");

  function onChangeWriter(event) {
    setWriter(event.target.value);
  }

  function onChangePassword(event) {
    setPassword(event.target.value);
  }

  function onChangeTitle(event) {
    setTitle(event.target.value);
  }

  function onChangeContents(event) {
    setContents(event.target.value);
  }

  function onClickCorrect() {
    if (writer == "") {
      setWriterError("입력되지 않았습니다!");
    }

    if (password == "") {
      setPasswordError("입력되지 않았습니다!");
    }

    if (title == "") {
      setTitleError("입력되지 않았습니다!");
    }

    if (contents == "") {
      setContentsError("입력되지 않았습니다!");
    }
  }

  return (
    <Wrapper>
      <Title>게시물 수정</Title>
      <WriterWrapper>
        <TextWrapper>
          <Label>작성자</Label>
          <Writer
            name="writer"
            type="text"
            placeholder="이름을 적어주세요."
            onChange={onChangeWriter}
          />
          <Error>{writerError}</Error>
        </TextWrapper>
        <TextWrapper>
          <Label>비밀번호</Label>
          <Password
            name="password"
            type="password"
            placeholder="비밀번호를 입력해주세요."
            onChange={onChangePassword}
          />
          <Error>{passwordError}</Error>
        </TextWrapper>
      </WriterWrapper>
      <TextWrapper>
        <Label>제목</Label>
        <Subject
          name="subject"
          type="text"
          placeholder="제목을 작성해주세요."
          onChange={onChangeTitle}
        />
        <Error>{titleError}</Error>
      </TextWrapper>
      <TextWrapper>
        <Label>내용</Label>
        <Contents
          name="contents"
          placeholder="내용을 작성해주세요."
          onChange={onChangeContents}
        />
        <Error>{contentsError}</Error>
      </TextWrapper>
      <TextWrapper>
        <Label>주소</Label>
        <AddressWrapper>
          <AddressNumber name="addressnumber" placeholder="07250" />
          <SearchButton>우편번호 검색</SearchButton>
        </AddressWrapper>
        <Address />
        <Address />
      </TextWrapper>
      <TextWrapper>
        <Label>유튜브</Label>
        <Youtube name="youtube" placeholder="링크를 복사해주세요." />
      </TextWrapper>
      <PhotoWrapper>
        <Label>사진첨부</Label>
        <UploadButton>
          <div>+</div>
          <div>Upload</div>
        </UploadButton>
        <UploadButton>
          <div>+</div>
          <div>Upload</div>
        </UploadButton>
        <UploadButton>
          <div>+</div>
          <div>Upload</div>
        </UploadButton>
      </PhotoWrapper>
      <OptionWrapper>
        <Label>메인설정</Label>
        <OptionRadio name="optionradio" type="radio" />
        <RadioLabel>유튜브</RadioLabel>
        <OptionRadio name="optionradio" type="radio" />
        <RadioLabel>사진</RadioLabel>
      </OptionWrapper>
      <ButtonWrapper>
        <CancelButton>취소하기</CancelButton>
        <SubmitButton onClick={onClickCorrect}>수정하기</SubmitButton>
      </ButtonWrapper>
    </Wrapper>
  );
}
