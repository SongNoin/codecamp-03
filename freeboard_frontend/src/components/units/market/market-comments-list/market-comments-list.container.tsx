import MarketCommentsListUI from "./market-comments-list.presenter";
import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  DELETE_USEDITEM_QUESTION,
  FETCH_USEDITEM_QUESTIONS,
} from "./market-comments-list.queries";

export default function MarketCommentsList(props) {
  const router = useRouter();
  const [deleteUseditemQuestion] = useMutation(DELETE_USEDITEM_QUESTION);

  const { data, fetchMore } = useQuery(FETCH_USEDITEM_QUESTIONS, {
    variables: {
      useditemId: router.query.number,
    },
  });

  function onLoadMore() {
    if (!data) return;
    fetchMore({
      variables: {
        // boardId: String(router.query.number),
        page: Math.ceil(data?.fetchUseditemQuestions.length / 10) + 1,
      },
      updateQuery: (prev: any, { fetchMoreResult }) => {
        return {
          fetchUseditemQuestions: [
            ...prev.fetchUseditemQuestions,
            ...fetchMoreResult.fetchUseditemQuestions,
          ],
        };
      },
    });
  }

  // 원래 방식
  // async function onClickDelete(event) {
  //   try {
  //     await deleteUseditemQuestion({
  //       variables: {
  //         useditemQuestionId: event.currentTarget.id,
  //       },
  //       refetchQueries: [
  //         {
  //           query: FETCH_USEDITEM_QUESTIONS,
  //           variables: { useditemId: router.query.number },
  //         },
  //       ],
  //     });
  //     alert("질문을 삭제합니다~");
  //   } catch (error) {
  //     alert(error.message);
  //   }
  // }

  const onClickDelete = (useditemQuestionId) => async () => {
    try {
      await deleteUseditemQuestion({
        variables: {
          useditemQuestionId: useditemQuestionId,
        },
        update(cache, { data }) {
          const deleteId = data.deleteUseditemQuestion;
          cache.modify({
            fields: {
              fetchUseditemQuestions: (prev, { readField }) => {
                const newFetchUseditemQuestions = prev.filter(
                  (el) => readField("_id", el) !== deleteId
                );
                return [...newFetchUseditemQuestions];
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
    <MarketCommentsListUI
      data={data}
      onLoadMore={onLoadMore}
      onClickDelete={onClickDelete}
    />
  );
}
