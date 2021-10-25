import { useMutation, useQuery } from "@apollo/client";
import MarketAnswerListUI from "./market-answer-list.presenter";
import {
  DELETE_USEDITEM_QUESTION_ANSWER,
  FETCH_USEDITEM_QUESTIONS_ANSWERS,
} from "./market-answer-list.queries";

export default function MarketAnswerList(props) {
  const { data, fetchMore } = useQuery(FETCH_USEDITEM_QUESTIONS_ANSWERS, {
    variables: {
      useditemQuestionId: props.el?._id,
    },
  });

  const [deleteUseditemQuestionAnswer] = useMutation(
    DELETE_USEDITEM_QUESTION_ANSWER
  );
  function onLoadMore() {
    if (!data) return;
    fetchMore({
      variables: {
        page: Math.ceil(data?.fetchUseditemQuestionAnswers.length / 10) + 1,
      },
      updateQuery: (prev: any, { fetchMoreResult }) => {
        return {
          fetchUseditemQuestionAnswers: [
            ...prev.fetchUseditemQuestionAnswers,
            ...fetchMoreResult.fetchUseditemQuestionAnswers,
          ],
        };
      },
    });
  }

  const onClickDeleteAnswer = (useditemQuestionAnswerId) => async () => {
    try {
      await deleteUseditemQuestionAnswer({
        variables: {
          useditemQuestionAnswerId: useditemQuestionAnswerId,
        },
        update(cache, { data }) {
          const deleteId = data.deleteUseditemQuestionAnswer;
          cache.modify({
            fields: {
              fetchUseditemQuestionAnswers: (prev, { readField }) => {
                const newFetchUseditemQuestionAnswers = prev.filter(
                  (el) => readField("_id", el) !== deleteId
                );
                return [...newFetchUseditemQuestionAnswers];
              },
            },
          });
        },
      });
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <MarketAnswerListUI
      data={data}
      onLoadMore={onLoadMore}
      onClickDeleteAnswer={onClickDeleteAnswer}
    />
  );
}
