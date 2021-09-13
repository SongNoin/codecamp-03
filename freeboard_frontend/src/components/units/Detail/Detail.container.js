import DetailUI from "./Detail.presenter";
import { useQuery, useMutation } from "@apollo/client";
import {
  FETCH_BOARD,
  DELETE_BOARD,
  LIKE_BOARD,
  DISLIKE_BOARD,
} from "./Detail.queries";
import { useRouter } from "next/router";

export default function Detail() {
  const [deleteBoard] = useMutation(DELETE_BOARD);
  const [likeBoard] = useMutation(LIKE_BOARD);
  const [dislikeBoard] = useMutation(DISLIKE_BOARD);
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: router.query.number, //number는 폴더 변수 이름
    },
  });

  function onClickList() {
    router.push(`/boards/list/`);
  }

  async function onClickDelete(event) {
    await deleteBoard({
      variables: {
        boardId: event.target.id,
      },
      refetchQueries: [
        {
          query: FETCH_BOARD,
          variables: { boardId: router.query.number },
        },
      ],
    });
    alert("게시물을 삭제합니다~");
    router.push(`/boards/list/`);
  }

  async function onClickMoveToEdit() {
    router.push(`${router.query.number}/edit`);
  }

  async function onClickLike(event) {
    await likeBoard({
      variables: {
        boardId: event.target.id,
      },
      refetchQueries: [
        {
          query: FETCH_BOARD,
          variables: { boardId: router.query.number },
        },
      ],
    });
    alert("좋아요~");
  }

  async function onClickDislike(event) {
    await dislikeBoard({
      variables: {
        boardId: event.target.id,
      },
      refetchQueries: [
        {
          query: FETCH_BOARD,
          variables: { boardId: router.query.number },
        },
      ],
    });
    alert("싫어요~");
  }

  return (
    <DetailUI
      router={router}
      data={data}
      onClickList={onClickList}
      onClickDelete={onClickDelete}
      onClickMoveToEdit={onClickMoveToEdit}
      onClickLike={onClickLike}
      onClickDislike={onClickDislike}
    />
  );
}
