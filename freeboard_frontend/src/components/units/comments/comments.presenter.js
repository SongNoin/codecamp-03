import {
  Wrapper,
  CommentsTitle,
  CommentsIcon,
  WriterInfo,
  WriterInput,
  PasswordInput,
  CommentsContents,
  CommentsInput,
  RegisterButton,
  CommentsRegister,
  CommentsCount,
  WrapperFooter,
  CommentsWrapper,
  CommentsInfo,
  CommentsPhoto,
  CommentsText,
  CommentsWriter,
  Comments,
  CommentsDate,
  CommentsButtonWrapper,
  CommentsEditButton,
  CommentsDeleteButton,
  EditComments,
  EditButton,
} from "./comments.styles";

export default function CommentsUI(props) {
  return (
    <Wrapper>
      <CommentsTitle>
        <CommentsIcon>
          <img src="/images/commentsicon.png" />
        </CommentsIcon>
        댓글
      </CommentsTitle>
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
      </WriterInfo>
      <CommentsContents>
        <CommentsInput
          name="commentsinput"
          placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
          onChange={props.onChangeContents}
        ></CommentsInput>
        <CommentsRegister>
          <CommentsCount>0/100</CommentsCount>
          <RegisterButton onClick={props.onClickRegister}>
            등록하기
          </RegisterButton>
        </CommentsRegister>
      </CommentsContents>
      <WrapperFooter>
        {props.data?.fetchBoardComments.map((el) => (
          <CommentsWrapper key={el._id}>
            <CommentsInfo>
              <CommentsPhoto>
                <img src="/images/photo.png" />
              </CommentsPhoto>
              <CommentsText>
                <CommentsWriter>{el.writer}</CommentsWriter>
                <Comments>{el.contents}</Comments>
                <CommentsDate>{el.createdAt.slice(0, 10)}</CommentsDate>
              </CommentsText>
            </CommentsInfo>
            <CommentsButtonWrapper>
              <CommentsEditButton
                src="/images/editicon.png"
                onClick={props.onClickShowEdit}
              ></CommentsEditButton>
              <CommentsDeleteButton
                src="/images/deleteicon.png"
                id={el._id}
                onClick={props.onClickDelete}
              ></CommentsDeleteButton>
            </CommentsButtonWrapper>
          </CommentsWrapper>
        ))}
      </WrapperFooter>
    </Wrapper>
  );
}
