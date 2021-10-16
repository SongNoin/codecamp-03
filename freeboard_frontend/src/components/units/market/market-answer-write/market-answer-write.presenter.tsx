import SmallCommonButton from "../../../commons/buttons/04/SmallCommonButton";

import {
  Wrapper,
  Arrow,
  InputCommentBox,
  CommentInput,
  CommentInfo,
  CommentCountInput,
} from "./market-answer-write.styles";

export default function MarketAnswerWriteUI(props) {
  return (
    <Wrapper>
      <Arrow src="/images/answerarrow.png" />
      <InputCommentBox>
        <CommentInput type="text" onChange={props.onChangeMyAnswer} />
        <CommentInfo>
          <CommentCountInput></CommentCountInput>
          <SmallCommonButton
            name={props.isAnswerEdit ? "수정하기" : "답변하기"}
            onClick={
              props.isAnswerEdit
                ? props.onClickUpdateAnswer
                : props.onClickRegisterAnswer
            }
            id={props.answerel?._id}
          />
        </CommentInfo>
      </InputCommentBox>
    </Wrapper>
  );
}
