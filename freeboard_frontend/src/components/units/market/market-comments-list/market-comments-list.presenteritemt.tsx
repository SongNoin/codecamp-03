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
    setIsQuestionEdit((prev) => !prev);
  }

  function onClickOpenAnswer() {
    serIsOpenAnswer((prev) => !prev);
  }
  return (
    <>
      {!isQuestionEdit && (
        <Wrapper>
          <CommentWrapper>
            <UserInfoWrapper>
              <UserPhoto
                src={
                  props.el?.user.picture
                    ? `https://storage.googleapis.com/${props.el.user.picture}`
                    : "/images/photo.png"
                }
              />
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
      {isQuestionEdit && (
        <MarketCommentsWrite
          isQuestionEdit={isQuestionEdit}
          setIsQuestionEdit={setIsQuestionEdit}
          el={props.el}
        />
      )}
      <MarketAnswerList el={props.el} />

      {isOpenAnswer && (
        <MarketAnswerWrite el={props.el} serIsOpenAnswer={serIsOpenAnswer} />
      )}
      <LineWrapper>
        <Line />
      </LineWrapper>
    </>
  );
}
