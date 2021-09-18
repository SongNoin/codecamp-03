import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useRef } from "react";
import CommnetsListUI from "./comments-list.presenter";
import { FETCH_BOARD_COMMENTS } from "./comments-list.queries";

export default function CommentsList() {
  const router = useRouter();
  const { data, fetchMore } = useQuery(FETCH_BOARD_COMMENTS, {
    variables: { boardId: router.query.number },
  });

  function onLoadMore() {
    if (!data) return;
    fetchMore({
      variables: { page: Math.ceil(data?.fetchBoardComments.length / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        return {
          fetchBoards: [
            ...prev.fetchBoardComments,
            ...fetchMoreResult.fetchBoardComments,
          ],
        };
      },
    });
  }

  return (
    <>
      <CommnetsListUI data={data} onLoadMore={onLoadMore} />
    </>
  );
}
