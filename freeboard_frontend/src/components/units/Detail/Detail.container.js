import DetailUI from "./Detail.presenter";
import { useQuery, useMutation } from "@apollo/client";
import { FETCH_BOARD } from "./Detail.queries";
import { DELETE_BOARD } from "./Detail.queries";
import { useRouter } from "next/router";

export default function Detail() {
  const [deleteBoard] = useMutation(DELETE_BOARD);
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: router.query.number, //number는 폴더 변수 이름
    },
  });

  async function onClickDelete(event) {
    await deleteBoard({
      variables: { boardId: event.target.id },
      refetchQueries: [{ query: FETCH_BOARD }],
    });
  }

  return <DetailUI router={router} data={data} onClickDelete={onClickDelete} />;
}
