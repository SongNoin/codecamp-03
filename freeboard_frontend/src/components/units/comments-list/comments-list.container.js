import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import CommnetsListUI from "./comments-list.presenter";
import { FETCH_BOARD_COMMENTS } from "./comments-list.queries";

export default function CommentsList() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD_COMMENTS, {
    variables: { boardId: router.query.number },
  });

  return (
    <>
      <CommnetsListUI data={data} />
    </>
  );
}
