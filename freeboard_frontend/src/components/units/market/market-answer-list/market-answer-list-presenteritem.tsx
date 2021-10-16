import { useState } from "react";
import MarketAnswerWrite from "../market-answer-write/market-answer-write.container";
import {
  Wrapper,
  AnswerWrapper,
  Arrow,
  UserPhoto,
  AnswerInfo,
  UserName,
  Comment,
  ButtonWrapper,
  Button,
} from "./market-answer-list.styles";

export default function MarketAnswerListItemUI(props) {
  const [isAnswerEdit, setIsAnswerEdit] = useState(false);

  function onClickOpenEditAnswer() {
    setIsAnswerEdit(true);
  }
  return (
    <>
      {!isAnswerEdit && (
        <Wrapper>
          <AnswerWrapper>
            <Arrow src="/images/answerarrow.png" />
            <UserPhoto src="/images/photo.png" />
            <AnswerInfo>
              <UserName>{props.answerel?.user?.name}</UserName>
              <Comment>{props.answerel?.contents}</Comment>
            </AnswerInfo>
          </AnswerWrapper>
          <ButtonWrapper>
            <Button
              onClick={onClickOpenEditAnswer}
              src="/images/editicon.png"
            />
            <Button
              onClick={props.onClickDeleteAnswer(props.answerel?._id)}
              src="/images/deleteicon.png"
            />
          </ButtonWrapper>
        </Wrapper>
      )}
      {isAnswerEdit && (
        <MarketAnswerWrite
          isAnswerEdit={isAnswerEdit}
          setIsAnswerEdit={setIsAnswerEdit}
          answerel={props.answerel}
        />
      )}
    </>
  );
}
