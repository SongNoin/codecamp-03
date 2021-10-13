import { useMutation } from "@apollo/client";
import router from "next/router";
import { useState } from "react";
import {
  FETCH_USEDITEM_QUESTIONS,
  UPDATE_USEDITEM_QUESTION,
} from "../market-comments-list/market-comments-list.queries";
import MarketCommentsWriteUI from "./market-comments-write.presenter";
import { CREATE_USEDITEM_QUESTION } from "./market-comments-write.queries";

export default function MarketCommentsWrite(props) {
  const [createUseditemQuestion] = useMutation(CREATE_USEDITEM_QUESTION);
  const [updateUseditemQuestion] = useMutation(UPDATE_USEDITEM_QUESTION);
  const [myContents, setMycontents] = useState("");

  function onChangeContents(event) {
    setMycontents(event.target.value);
  }

  async function onClickRegisterComment() {
    try {
      await createUseditemQuestion({
        variables: {
          useditemId: router.query.number,
          createUseditemQuestionInput: {
            contents: myContents,
          },
        },
        refetchQueries: [
          {
            query: FETCH_USEDITEM_QUESTIONS,
            variables: { useditemId: router.query.number },
          },
        ],
      });
      alert("댓글을 등록합니다~");
    } catch (error) {
      alert(error.message);
    }
  }

  async function onClickUpdateQuestion(event) {
    try {
      await updateUseditemQuestion({
        variables: {
          updateUseditemQuestionInput: {
            contents: myContents,
          },
          useditemQuestionId: event.target.id,
        },
        refetchQueries: [
          {
            query: FETCH_USEDITEM_QUESTIONS,
            variables: { useditemId: router.query.number },
          },
        ],
      });
      props.setIsQuestionEdit?.(false);
      alert("질문을 수정합니다~");
    } catch (error) {
      alert(error.message);
    }
  }
  return (
    <MarketCommentsWriteUI
      onChangeContents={onChangeContents}
      onClickRegisterComment={onClickRegisterComment}
      isQuestionEdit={props.isQuestionEdit}
      el={props.el}
      onClickUpdateQuestion={onClickUpdateQuestion}
    />
  );
}
