import DetailUI from "./Detail.presenter";
import { useQuery } from "@apollo/client";
import { FETCH_BOARD } from "./Detail.queries";
import { useRouter } from "next/router";

export default function Detail() {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: router.query.number, //number는 폴더 변수 이름
    },
  });

  return <DetailUI router={router} data={data} />;
}
