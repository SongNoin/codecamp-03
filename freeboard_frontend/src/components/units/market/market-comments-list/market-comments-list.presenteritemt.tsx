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
  Line,
} from "./market-comments-list.styles";
import { useState } from "react";
import MarketCommentsWrite from "../market-comments-write/market-comments-write.container";

export default function MarketCommentListItemUI(props) {
  const [isQuestionEdit, setIsQuestionEdit] = useState(false);

  function onClickUpdate() {
    setIsQuestionEdit(true);
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
              <Button src="/images/comment.png" />
              <Button onClick={onClickUpdate} src="/images/editicon.png" />
              <Button
                onClick={props.onClickDelete(props.el?._id)}
                // id={props.el?._id}
                src="/images/deleteicon.png"
              />
            </ButtonWrapper>
          </CommentWrapper>
          <Line />
        </Wrapper>
      )}
      {isQuestionEdit && (
        <MarketCommentsWrite
          isQuestionEdit={isQuestionEdit}
          setIsQuestionEdit={setIsQuestionEdit}
          el={props.el}
        />
      )}
    </>
  );
}
