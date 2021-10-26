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
  WrapperFooter,
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
          <Arrow src="/images/answerarrow.png" />
          <WrapperFooter>
            <AnswerWrapper>
              <UserPhoto
                src={
                  props.answerel?.user?.picture
                    ? `https://storage.googleapis.com/${props.answerel.user.picture}`
                    : "/images/photo.png"
                }
              />
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
          </WrapperFooter>
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
