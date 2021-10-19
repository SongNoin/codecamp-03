import { useMutation } from "@apollo/client";
import { useState } from "react";
import {
  CREATE_USEDITEM_QUESTION_ANSWER,
  UPDATE_USEDITEM_QUESTION_ANSWER,
  FETCH_USEDITEM_QUESTIONS_ANSWERS,
} from "./market-answer-write.queries";

import MarketAnswerWriteUI from "./market-answer-write.presenter";

export default function MarketAnswerWrite(props) {
  const [myAnswer, setMyAnswer] = useState("");
  const [createUseditemQuestionAnswer] = useMutation(
    CREATE_USEDITEM_QUESTION_ANSWER
  );
  const [updateUseditemQuestionAnswer] = useMutation(
    UPDATE_USEDITEM_QUESTION_ANSWER
  );

  function onChangeMyAnswer(event) {
    setMyAnswer(event.target.value);
  }
  async function onClickRegisterAnswer() {
    try {
      await createUseditemQuestionAnswer({
        variables: {
          useditemQuestionId: props.el?._id,
          createUseditemQuestionAnswerInput: {
            contents: myAnswer,
          },
        },
        refetchQueries: [
          {
            query: FETCH_USEDITEM_QUESTIONS_ANSWERS,
            variables: { useditemQuestionId: props.el?._id },
          },
        ],
      });
      alert("답변을 등록합니다~");
    } catch (error) {
      alert(error.message);
    }
  }

  async function onClickUpdateAnswer(event) {
    try {
      await updateUseditemQuestionAnswer({
        variables: {
          updateUseditemQuestionAnswerInput: { contents: myAnswer },
          useditemQuestionAnswerId: event.target.id,
        },
        refetchQueries: [
          {
            query: FETCH_USEDITEM_QUESTIONS_ANSWERS,
            variables: {
              useditemQuestionId: props.answerel?.useditemQuestion._id,
            },
          },
        ],
      });
      props.setIsAnswerEdit?.(false);
      alert("답변을 수정합니다~");
    } catch (error) {
      alert(error.message);
    }
  }
  return (
    <MarketAnswerWriteUI
      onChangeMyAnswer={onChangeMyAnswer}
      onClickRegisterAnswer={onClickRegisterAnswer}
      onClickUpdateAnswer={onClickUpdateAnswer}
      isAnswerEdit={props.isAnswerEdit}
      answerel={props.answerel}
    />
  );
}
