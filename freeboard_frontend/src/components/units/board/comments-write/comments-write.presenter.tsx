import {
  Wrapper,
  CommentsTitle,
  CommentsIcon,
  WriterInfo,
  WriterInput,
  PasswordInput,
  RateWrapper,
  RateInput,
  CommentsContents,
  CommentsInput,
  RegisterButton,
  CommentsRegister,
  CommentsCount,
} from "./comments-write.styles";

export default function CommentsWriteUI(props: any) {
  return (
    <>
      <Wrapper>
        {!props.isCommentEdit && (
          <CommentsTitle>
            <CommentsIcon>
              <img src="/images/commentsicon.png" />
            </CommentsIcon>
            댓글
          </CommentsTitle>
        )}
        <WriterInfo>
          <WriterInput
            name="writerinput"
            type="text"
            placeholder="작성자"
            onChange={props.onChangeWriter}
          ></WriterInput>
          <PasswordInput
            name="passwordinput"
            type="password"
            placeholder="비밀번호"
            onChange={props.onChangePassword}
          ></PasswordInput>
          <RateWrapper>
            <RateInput onChange={props.handleChange} />
          </RateWrapper>
        </WriterInfo>
        <CommentsContents>
          <CommentsInput
            name="commentsinput"
            placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
            onChange={props.onChangeContents}
          ></CommentsInput>
          <CommentsRegister>
            <CommentsCount>0/100</CommentsCount>
            <RegisterButton
              id={props.el?._id}
              onClick={
                props.isCommentEdit ? props.onClickEdit : props.onClickRegister
              }
            >
              {props.isCommentEdit ? "수정하기" : "등록하기"}
            </RegisterButton>
          </CommentsRegister>
        </CommentsContents>
      </Wrapper>
    </>
  );
}
