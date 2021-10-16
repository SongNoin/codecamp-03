import {
  Wrapper,
  CommentWrapper,
  UserInfoWrapper,
  UserPhoto,
  UserInfo,
  UserName,
  Comment,
  CreatedAt,
  ButtonWrapper,
  Button,
  LineWrapper,
  Line,
} from "./market-comments-list.styles";
import { useState } from "react";

import MarketCommentsWrite from "../market-comments-write/market-comments-write.container";
import MarketAnswerWrite from "../market-answer-write/market-answer-write.container";
import MarketAnswerList from "../market-answer-list/market-answer-list.container";

export default function MarketCommentListItemUI(props) {
  const [isQuestionEdit, setIsQuestionEdit] = useState(false);
  const [isOpenAnswer, serIsOpenAnswer] = useState(false);

  function onClickUpdate() {
    setIsQuestionEdit(true);
  }

  function onClickOpenAnswer() {
    serIsOpenAnswer(true);
  }
  return (
    <>
      {!isQuestionEdit && (
        <Wrapper>
          <CommentWrapper>
            <UserInfoWrapper>
              <UserPhoto src="/images/photo.png" />
              <UserInfo>
                <UserName>{props.el?.user?.name}</UserName>
                <Comment>{props.el?.contents}</Comment>
                <CreatedAt>
                  {props.el?.createdAt.slice(0, 10) + " "}
                  {props.el?.createdAt.slice(11, 19)}
                </CreatedAt>
              </UserInfo>
            </UserInfoWrapper>
            <ButtonWrapper>
              <Button onClick={onClickOpenAnswer} src="/images/comment.png" />
              <Button onClick={onClickUpdate} src="/images/editicon.png" />
              <Button
                onClick={props.onClickDelete(props.el?._id)}
                // id={props.el?._id}
                src="/images/deleteicon.png"
              />
            </ButtonWrapper>
          </CommentWrapper>
        </Wrapper>
      )}
      <MarketAnswerList el={props.el} />

      {isQuestionEdit && (
        <MarketCommentsWrite
          isQuestionEdit={isQuestionEdit}
          setIsQuestionEdit={setIsQuestionEdit}
          el={props.el}
        />
      )}
      {isOpenAnswer && <MarketAnswerWrite el={props.el} />}
      <LineWrapper>
        <Line />
      </LineWrapper>
    </>
  );
}
