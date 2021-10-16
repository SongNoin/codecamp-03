import SmallCommonButton from "../../../commons/buttons/04/SmallCommonButton";
import {
  Wrapper,
  TitleWrapper,
  TitlePhoto,
  Title,
  InputCommentBox,
  CommentInput,
  CommentInfo,
  CommentCountInput,
} from "./market-comments-write.styles";

export default function MarketCommentsWriteUI(props) {
  return (
    <>
      <Wrapper>
        {!props.isQuestionEdit && (
          <TitleWrapper>
            <TitlePhoto src="/images/commentsicon.png" />
            <Title>문의하기</Title>
          </TitleWrapper>
        )}
        <InputCommentBox>
          <CommentInput onChange={props.onChangeContents}></CommentInput>
          <CommentInfo>
            <CommentCountInput></CommentCountInput>
            <SmallCommonButton
              onClick={
                props.isQuestionEdit
                  ? props.onClickUpdateQuestion
                  : props.onClickRegisterComment
              }
              id={props.el?._id}
              name={props.isQuestionEdit ? "수정하기" : "문의하기"}
            />
          </CommentInfo>
        </InputCommentBox>
      </Wrapper>
    </>
  );
}
